import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPetriDishIcon],svg[openmoji-petri-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36.053" cy="36.332" r="21.581" fill="#d0cfce"></svg:circle><svg:circle cx="36.053" cy="36.332" r="16.939" fill="#92d3f5"></svg:circle><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36.053" cy="36.332" r="16.939"></svg:circle><svg:circle cx="36.053" cy="36.332" r="21.581"></svg:circle><svg:path stroke-linecap="round" d="m27.922 28.929l4.116-2.71m-3.674 16.36l-1.436-4.714m18.802-3.308l-4.85-.866m-.464 10.719l1.261-4.763"></svg:path><svg:circle cx="33.056" cy="35.069" r=".829" stroke-linecap="round"></svg:circle><svg:circle cx="40.87" cy="27.549" r=".829" stroke-linecap="round"></svg:circle><svg:circle cx="35.28" cy="47.539" r=".829" stroke-linecap="round"></svg:circle></svg:g>`,
})
export class OpenmojiPetriDishIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
