import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCosmeticBrushIcon],svg[icon-park-solid-cosmetic-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCosmeticBrush0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m16.1 25.829l22.627-19.8s2.12-2.12 4.242 0c2.121 2.122 0 4.243 0 4.243L23.17 32.9z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m22.464 20.879l5.657 5.657"></svg:path><svg:path stroke="#fff" d="m5.493 30.778l10.607-4.95l7.07 7.072l-4.95 10.606s-4.95.707-9.192-3.535c-4.243-4.243-3.536-9.193-3.536-9.193Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m6.908 36.435l4.95-2.121m.707 7.778l1.415-2.828"></svg:path><svg:path stroke="#fff" d="m18.93 23.354l2.828-2.475l2.828-2.475m6.01 6.01l-2.475 2.828l-2.475 2.829"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCosmeticBrush0)"></svg:path>`,
})
export class IconParkSolidCosmeticBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
