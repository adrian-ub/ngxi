import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFireSimpleThinIcon],svg[ph-fire-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140.82 20.92a4 4 0 0 0-6.31 1.71l-24.15 66.2l-28.55-27.7a4 4 0 0 0-6 .44C54.71 89.25 44 117 44 144a84 84 0 0 0 168 0c0-57.76-49.78-105.31-71.18-123.08M128 220a76.08 76.08 0 0 1-76-76c0-24.07 9.25-48.93 27.5-74l29.71 28.83a4 4 0 0 0 6.55-1.5l24.3-66.6C162.27 50.09 204 93.18 204 144a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhFireSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
