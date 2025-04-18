import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScribbleFillIcon],svg[ph-scribble-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-14.34 137.66l-8 8a9 9 0 0 0 0 12.68l4 4a8 8 0 0 1-11.32 11.32l-4-4a25 25 0 0 1 0-35.32l8-8a9 9 0 0 0 0-12.68a9 9 0 0 0-12.68 0l-48 48a25 25 0 0 1-35.32-35.32l72-72a9 9 0 0 0 0-12.68a9 9 0 0 0-12.68 0l-48 48a25 25 0 0 1-35.32-35.32l28-28a8 8 0 0 1 11.32 11.32l-28 28a9 9 0 0 0 0 12.68a9 9 0 0 0 12.68 0l48-48a25 25 0 0 1 35.32 35.32l-72 72a9 9 0 0 0 0 12.68a9 9 0 0 0 12.68 0l48-48a25 25 0 0 1 35.32 35.32"></svg:path>`,
})
export class PhScribbleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
