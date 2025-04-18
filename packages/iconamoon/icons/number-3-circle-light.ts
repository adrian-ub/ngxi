import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber3CircleLightIcon],svg[iconamoon-number-3-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M10 16.236A3 3 0 1 0 12 11l3-4h-5"></svg:path></svg:g>`,
})
export class IconamoonNumber3CircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
