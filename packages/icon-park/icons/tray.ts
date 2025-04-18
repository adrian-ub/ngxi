import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTrayIcon],svg[icon-park-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="30" x="24.762" y="3.243" fill="#2F88FF" stroke="#000" rx="2" transform="rotate(45 24.762 3.243)"></svg:rect><svg:path stroke="#000" d="M38.1966 16.6775L42.4392 12.4348L35.3682 5.36377L31.1255 9.60641"></svg:path><svg:path stroke="#fff" d="M18 21H30"></svg:path><svg:path stroke="#fff" d="M18 27H22"></svg:path><svg:path stroke="#fff" d="M28 27H30"></svg:path></svg:g>`,
})
export class IconParkTrayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
