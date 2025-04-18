import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlipVerticalSquare2Icon],svg[streamline-flip-vertical-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5v-1a1 1 0 0 0-1-1h-1m-3 0h-3m-5 2v-1a1 1 0 0 1 1-1h1m-2 9v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3m-13-4V7h13V5.5"></svg:path>`,
})
export class StreamlineFlipVerticalSquare2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
