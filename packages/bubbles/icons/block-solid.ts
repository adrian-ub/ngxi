import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBlockSolidIcon],svg[bubbles-block-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8m0 2.4a5.55 5.55 0 0 1 3.01.893L3.293 11.01A5.58 5.58 0 0 1 8 2.4m0 11.2a5.55 5.55 0 0 1-3.01-.893l7.717-7.717A5.58 5.58 0 0 1 8 13.6"></svg:path>`,
})
export class BubblesBlockSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
