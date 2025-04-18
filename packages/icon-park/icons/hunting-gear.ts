import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHuntingGearIcon],svg[icon-park-hunting-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M44 29H4V42H44V29Z"></svg:path><svg:path stroke-linejoin="round" d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"></svg:path><svg:path stroke-linecap="round" d="M19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22"></svg:path><svg:path stroke-linecap="round" d="M29 22C31.7614 22 34 19.7614 34 17C34 14.2386 31.7614 12 29 12"></svg:path><svg:path stroke-linecap="round" d="M20 17H28"></svg:path></svg:g>`,
})
export class IconParkHuntingGearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
