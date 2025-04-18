import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilSkipPrevSolidIcon],svg[basil-skip-prev-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm3.102 5.66a.834.834 0 0 1 0-1.32a25 25 0 0 1 6.935-3.787l.466-.165a.944.944 0 0 1 1.243.772a29.8 29.8 0 0 1 0 7.68a.944.944 0 0 1-1.243.772l-.466-.165a25 25 0 0 1-6.935-3.788"></svg:path>`,
})
export class BasilSkipPrevSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
