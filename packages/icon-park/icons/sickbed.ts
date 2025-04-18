import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSickbedIcon],svg[icon-park-sickbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 23L40 35"></svg:path><svg:circle cx="12" cy="16" r="3" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" stroke-linejoin="round" d="M29 36L29.0001 31.5L19 28V36H29Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 27.5L23 14L41.3744 20.9998C42.8515 21.5625 43.6385 23.1747 43.1737 24.6855L40 35"></svg:path></svg:g>`,
})
export class IconParkSickbedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
