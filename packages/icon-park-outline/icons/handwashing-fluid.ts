import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHandwashingFluidIcon],svg[icon-park-outline-handwashing-fluid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 4v7m5 6v-6H19v6M31 4H19.8C17.142 4 15 5.2 15 8m23 18.978V26a9 9 0 0 0-9-9H19a9 9 0 0 0-9 9v9a9 9 0 0 0 9 9h5"></svg:path><svg:path d="M40 39.77c0 2.336-2.015 4.23-4.5 4.23S31 42.106 31 39.77S33.94 33 35.5 33s4.5 4.433 4.5 6.77Z"></svg:path></svg:g>`,
})
export class IconParkOutlineHandwashingFluidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
