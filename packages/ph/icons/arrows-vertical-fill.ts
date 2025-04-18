import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsVerticalFillIcon],svg[ph-arrows-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M167.39 196.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 96 192h24V64H96a8 8 0 0 1-5.66-13.66l32-32a8 8 0 0 1 11.32 0l32 32A8 8 0 0 1 160 64h-24v128h24a8 8 0 0 1 7.39 4.94"></svg:path>`,
})
export class PhArrowsVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
