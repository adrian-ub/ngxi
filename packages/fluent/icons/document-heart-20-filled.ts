import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentHeart20FilledIcon],svg[fluent-document-heart-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.503a3.84 3.84 0 0 1 2.003.654a3.852 3.852 0 0 1 4.875 5.916L8.45 18h6.05a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5m1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5m-4.863 4.335a2.85 2.85 0 1 1 4.031 4.031L6.354 18.68a.5.5 0 0 1-.707 0l-3.814-3.814a2.85 2.85 0 1 1 4.031-4.031l.137.136zm4.031 4.031l-.353-.353Z"></svg:path>`,
})
export class FluentDocumentHeart20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
