import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleBoldIcon],svg[ph-arrows-in-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 56.48L177 96h19a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12V60a12 12 0 0 1 24 0v19l39.51-39.52a12 12 0 0 1 17 17ZM108 136H60a12 12 0 0 0 0 24h19l-39.49 39.51a12 12 0 0 0 17 17L96 177v19a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowsInSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
