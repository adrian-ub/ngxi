import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFlashlampIcon],svg[icon-park-twotone-flashlamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFlashlamp0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m23 14l-5 10h12l-5 10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFlashlamp0)"></svg:path>`,
})
export class IconParkTwotoneFlashlampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
