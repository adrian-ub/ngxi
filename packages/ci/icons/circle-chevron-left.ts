import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCircleChevronLeftIcon],svg[ci-circle-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8.18v1.783V12a8.009 8.009 0 0 0-8-8Zm1.45 12.9L8.5 11.95L13.45 7l1.414 1.414l-3.536 3.536l3.535 3.536l-1.412 1.414h-.001Z"></svg:path>`,
})
export class CiCircleChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
