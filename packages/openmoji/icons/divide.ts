import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDivideIcon],svg[openmoji-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#d0cfce"><svg:path d="M59 41H13V31h46"></svg:path><svg:circle cx="36" cy="51" r="5"></svg:circle><svg:circle cx="36" cy="21" r="5"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M13 31h46v10H13z"></svg:path><svg:circle cx="36" cy="51" r="5"></svg:circle><svg:circle cx="36" cy="21" r="5"></svg:circle></svg:g>`,
})
export class OpenmojiDivideIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
