import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMaskTwoIcon],svg[icon-park-mask-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 5.25928C23.4067 8.09675 18 15.417 18 24.0001C18 32.5831 23.4067 39.9034 31 42.7408"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 9L18 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 14L19 29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 20L22 35"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 28L26 40"></svg:path></svg:g>`,
})
export class IconParkMaskTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
