import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlipVerticalArrow2Icon],svg[streamline-flip-vertical-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.5l-4-4l-4 4zm0-13l-4 4l-4-4zM13.5 7h-1m-2 0h-1m-2 0h-1m-2 0h-1m-2 0h-1"></svg:path>`,
})
export class StreamlineFlipVerticalArrow2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
