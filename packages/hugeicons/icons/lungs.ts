import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLungsIcon],svg[hugeicons-lungs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.978 11c.41.206.737.562.996.995m0 0c.996 1.67.996 4.505.996 4.505c0 3.5-1.784 4.5-3.985 4.5C4.99 21 2 20.5 2 16C2 9.5 5.487 5 8.476 5c2.39 0 1.496 5 .498 6.995M16.022 11c-.412.206-.738.562-.997.995m0 0c-.996 1.67-.996 4.505-.996 4.505c0 3.5 1.784 4.5 3.985 4.5c.997 0 3.986-.5 3.986-5c0-6.5-3.487-11-6.477-11c-2.391 0-1.493 5-.498 6.995M14 7l-2-1.333m0 0L10 7m2-1.333V3" color="currentColor"></svg:path>`,
})
export class HugeiconsLungsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
