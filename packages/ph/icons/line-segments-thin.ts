import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsThinIcon],svg[ph-line-segments-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.81 36.19a28 28 0 0 0-39.6 0a28 28 0 0 0 0 39.6a26.6 26.6 0 0 0 3.14 2.71l-29.73 55.21a28.08 28.08 0 0 0-26.38 3.87l-24.82-24.82A28 28 0 0 0 76.2 76.19a28 28 0 0 0 3.14 42.31L49.6 173.72a28 28 0 0 0-29.41 6.49a28 28 0 1 0 39.6 0a29 29 0 0 0-3.14-2.71l29.73-55.21a28 28 0 0 0 26.38-3.87l24.82 24.82a28 28 0 1 0 39.09-5.74l29.73-55.22a28 28 0 0 0 29.41-46.09m-181.68 178a20 20 0 1 1 0-28.28a20 20 0 0 1 0 28.24Zm27.72-104a20 20 0 1 1 28.29 0a20 20 0 0 1-28.29-.05Zm92.3 64a20 20 0 1 1 0-28.29a20 20 0 0 1 0 28.25Zm56-104a20 20 0 1 1 0-28.29a20 20 0 0 1 0 28.24Z"></svg:path>`,
})
export class PhLineSegmentsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
