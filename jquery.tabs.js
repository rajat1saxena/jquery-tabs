/*
* Tabs jQuery Plugin
* A jQuery plugin to add 'tabs' support to webpages
* 
* Copywrite (c) 2012  Rajat Saxena<rajat.saxena.work@gmail.com>
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*/
(function($){
	$.fn.tabs = function(){
		return this.each(function(){

			/*plugin code starts here*/
			var parent = $(this);
			console.log(parent);

			// creating navigation system for the tabs
			var nav_div = document.createElement('div');
			nav_div.setAttribute('id','nav_div');
			var nav_ul = document.createElement('ul');
			nav_ul.setAttribute('id','nav');
			var panes_container = parent.find('div#panes_container');
			var arr_of_panes = panes_container.children();
			$.each(arr_of_panes,function(k){
				//creating the heading of tab
				var h1_tag = $(this).find('h1:first');
				h1_tag.remove();
				//creating list item for tab
				var nav_li = document.createElement('li');
				var nav_li_a = document.createElement('a');
				nav_li_a.setAttribute('href','#');
				nav_li_a.setAttribute('class','nav_link');
				var id_ele=this.getAttribute('id');
				nav_li_a.setAttribute('data-for',id_ele);
				nav_li_a_txt = document.createTextNode(h1_tag.text());
				nav_li_a.appendChild(nav_li_a_txt);
				nav_li.appendChild(nav_li_a);
				nav_ul.appendChild(nav_li);
			});
			nav_div.appendChild(nav_ul);
			parent.prepend(nav_div);

			//revealing the navigation links
			var nav_ul = parent.find('ul#nav');
			nav_ul.css('display','block');

			//setting the css of tab panes
			var panes_container = parent.find('div#panes_container');
			 //making 'position' property of panes_container 'relative'
			panes_container.css('position','relative');
			 // making children of panes_container position absolute w.r.t panes_container
			panes_container.children().css('position','absolute');
			 // hiding all the childrens of panes_container
			panes_container.children().css('display','none'); 

			//the click event of nav links(switching between tabs)
			var nav_link = $('a.nav_link');
			nav_link.click(function(){
				var id = this.getAttribute('data-for');
				
				// first remove 'current' class,if any
				nav_link.removeClass('current');

				// this is to ensure that all the children are hidden initialy
				panes_container.children().css('display','none');
				// now revealing the corresponding pane
				var target=panes_container.find('#'+id);
				target.css('display','block');

				// adding class 'current' to current link
				$(this).addClass('current');
			});

			//manual clicking of first item
			$('a.nav_link:first').click();

			/*plugin code ends here*/

		});
	}
})(jQuery);