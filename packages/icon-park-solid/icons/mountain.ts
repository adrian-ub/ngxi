import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMountainIcon],svg[icon-park-solid-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMountain0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m18 10l14 28H4z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m28 29l5.647-7L44 38H32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 22h12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m14 18l-4 8m12-8l4 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMountain0)"></svg:path>`,
})
export class IconParkSolidMountainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
