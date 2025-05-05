import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCastboxIcon],svg[hugeicons-castbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m18.527 5.544l-5.596-3.29a1.84 1.84 0 0 0-1.862 0l-5.596 3.29c-.963.566-1.445.85-1.709 1.31c-.264.462-.264 1.02-.264 2.138v6.016c0 1.117 0 1.676.264 2.137s.746.745 1.709 1.311l5.596 3.29a1.84 1.84 0 0 0 1.862 0l5.596-3.29c.963-.566 1.445-.85 1.709-1.31c.264-.462.264-1.02.264-2.138V8.992c0-1.117 0-1.676-.264-2.137s-.746-.745-1.709-1.311M17 12.5v1m-2-2V14m-2 .5V10m-2-.5V14m-2-3.5v5m-2-4v2M9.5 12h1m1 .5h1m-5 0h1" color="currentColor"></svg:path>`,
})
export class HugeiconsCastboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
