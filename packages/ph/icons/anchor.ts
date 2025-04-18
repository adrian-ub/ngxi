import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAnchorIcon],svg[ph-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 136a8 8 0 0 0-8 8c0 24.69-13.77 29.64-38.1 36.28c-11.36 3.1-24.12 6.6-33.9 14.34V128h32a8 8 0 0 0 0-16h-32V87a32 32 0 1 0-16 0v25H88a8 8 0 0 0 0 16h32v66.62c-9.78-7.74-22.54-11.24-33.9-14.34C61.77 173.64 48 168.69 48 144a8 8 0 0 0-16 0c0 38.11 27.67 45.66 49.9 51.72c24.33 6.64 38.1 11.59 38.1 36.28a8 8 0 0 0 16 0c0-24.69 13.77-29.64 38.1-36.28c22.23-6.06 49.9-13.61 49.9-51.72a8 8 0 0 0-8-8M112 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhAnchorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
