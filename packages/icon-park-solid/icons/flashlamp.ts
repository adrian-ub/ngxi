import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFlashlampIcon],svg[icon-park-solid-flashlamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFlashlamp0"><svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m23 14l-5 10h12l-5 10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFlashlamp0)"></svg:path>`,
})
export class IconParkSolidFlashlampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
