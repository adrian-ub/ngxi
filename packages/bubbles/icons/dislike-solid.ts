import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDislikeSolidIcon],svg[bubbles-dislike-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.837 7.884a1.833 1.833 0 0 1-1.753 2.367h-3.72a.832.832 0 0 0-.751 1.192l.952 1.995a1.62 1.62 0 0 1-.28 1.54a1.642 1.642 0 0 1-2.618-.089l-3.26-4.618a.84.84 0 0 0-.68-.353a.31.31 0 0 1-.31-.31V2.066a.33.33 0 0 1 .188-.3C8.072.572 8.891.414 10.9.414c.231 0 1.547.013 2.027.013c1.787 0 2.976 1.037 3.638 3.186L17.83 7.86zM4.417 9.918H4.4a1 1 0 0 1-.983.833h-1a.333.333 0 0 1-.333-.333V1.084a.333.333 0 0 1 .333-.333h1a1 1 0 0 1 1 1z"></svg:path>`,
})
export class BubblesDislikeSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
