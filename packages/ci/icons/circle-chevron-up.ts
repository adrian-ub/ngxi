import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCircleChevronUpIcon],svg[ci-circle-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-.016-2H12a8 8 0 1 0-.016 0Zm-3.47-5.136L7.1 13.45l4.95-4.95L17 13.45l-1.414 1.413l-3.536-3.535l-3.535 3.536h-.001Z"></svg:path>`,
})
export class CiCircleChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
