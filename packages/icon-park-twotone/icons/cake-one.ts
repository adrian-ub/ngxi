import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCakeOneIcon],svg[icon-park-twotone-cake-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCakeOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 14L9 21.9h30L34 15"></svg:path><svg:circle cx="31" cy="13" r="4" fill="#fff"></svg:circle><svg:path stroke-linecap="round" d="m33 9l2-5"></svg:path><svg:path d="M9.5 26.957q-.903.451-1.678.956C5.418 29.481 4 31.412 4 33.5c0 5.247 8.954 9.5 20 9.5s20-4.253 20-9.5c0-2.14-1.488-4.113-4-5.701"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M9 22h30v12H9z"></svg:path><svg:path d="M9 22h31"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCakeOne0)"></svg:path>`,
})
export class IconParkTwotoneCakeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
