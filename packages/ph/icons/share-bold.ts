import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShareBoldIcon],svg[ph-share-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 112.49l-48 48a12 12 0 0 1-17-17L195 116h-30a84 84 0 0 0-81.36 63a12 12 0 1 1-23.24-6A107.94 107.94 0 0 1 165 92h30l-27.49-27.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01M192 204H44V88a12 12 0 0 0-24 0v128a12 12 0 0 0 12 12h160a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhShareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
