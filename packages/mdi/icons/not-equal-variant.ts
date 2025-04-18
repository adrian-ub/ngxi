import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNotEqualVariantIcon],svg[mdi-not-equal-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.08 4.61l1.84.79L14.8 8H19v2h-5.05l-1.72 4H19v2h-7.62l-1.46 3.4l-1.84-.79L9.2 16H5v-2h5.06l1.71-4H5V8h7.63z"></svg:path>`,
})
export class MdiNotEqualVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
