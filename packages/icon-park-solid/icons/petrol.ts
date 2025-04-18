import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPetrolIcon],svg[icon-park-solid-petrol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPetrol0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 42V6h-3l-9 10H12l-6 6v20z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 16L22 6h18"></svg:path><svg:path fill="#000" stroke="#000" stroke-linecap="round" d="M20.643 28.889c1.431-1.88 2.535-4.479 3.131-5.889c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m11 8l-7 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPetrol0)"></svg:path>`,
})
export class IconParkSolidPetrolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
