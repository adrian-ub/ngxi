import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextIndentThinIcon],svg[ph-text-indent-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H112a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4M112 68h104a4 4 0 0 0 0-8H112a4 4 0 0 0 0 8m104 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M37.17 138.83a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66l-40-40a4 4 0 0 0-5.66 5.66L74.34 96l-37.17 37.17a4 4 0 0 0 0 5.66"></svg:path>`,
})
export class PhTextIndentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
