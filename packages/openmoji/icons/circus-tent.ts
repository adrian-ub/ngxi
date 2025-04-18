import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircusTentIcon],svg[openmoji-circus-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#FFF" d="M11.5 39h49v16h-49zM36 25L11.5 39h49z"></svg:path><svg:path fill="#EA5A47" d="M36 25L20.5 39h31z"></svg:path><svg:path fill="#FFF" d="m36 25l-5.5 14h11z"></svg:path><svg:path fill="#EA5A47" d="M21 39h30v16H21z"></svg:path><svg:path fill="#FFF" d="M30.5 39h11v16h-11z"></svg:path><svg:path fill="#3F3F3F" d="m36 44l-3 11h6z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M11.5 39h49v16h-49zM36 25L11.5 39h49z"></svg:path><svg:path d="M36 25L20.5 39h31z"></svg:path><svg:path d="m36 25l-5.5 14h11zM21 39h30v16H21z"></svg:path><svg:path d="M30.5 39h11v16h-11z"></svg:path><svg:path d="m36 44l-3 11h6z"></svg:path></svg:g>`,
})
export class OpenmojiCircusTentIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
