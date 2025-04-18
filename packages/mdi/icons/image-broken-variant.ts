import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageBrokenVariantIcon],svg[mdi-image-broken-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v6.59l-3-3.01l-4 4.01l-4-4l-4 4l-3-3.01V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-3 6.42l3 3.01V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.58l3 2.99l4-4l4 4"></svg:path>`,
})
export class MdiImageBrokenVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
