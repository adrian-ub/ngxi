import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutgoingIcon],svg[icon-park-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 35C18 32.7909 16.2091 31 14 31C11.7909 31 10 32.7909 10 35C10 37.2091 11.7909 39 14 39C16.2091 39 18 37.2091 18 35Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M37 35C37 32.7909 35.2091 31 33 31C30.7909 31 29 32.7909 29 35C29 37.2091 30.7909 39 33 39C35.2091 39 37 37.2091 37 35Z"></svg:path><svg:path stroke-linecap="round" d="M4 35H10"></svg:path><svg:path stroke-linecap="round" d="M18 35H29"></svg:path><svg:path stroke-linecap="round" d="M37 35H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 19L44 13L38 7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 13H44"></svg:path></svg:g>`,
})
export class IconParkOutgoingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
