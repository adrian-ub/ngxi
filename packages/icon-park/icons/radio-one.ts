import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRadioOneIcon],svg[icon-park-radio-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="38" height="28" x="5" y="14" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 22H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 28H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 34H36"></svg:path><svg:circle cx="18" cy="28" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 14V6H38V14"></svg:path></svg:g>`,
})
export class IconParkRadioOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
