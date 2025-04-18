import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSquareBracketsCircleIcon],svg[streamline-square-brackets-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.25A6.25 6.25 0 1 0 7 .75a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path d="M5.5 9.5H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h.5m3 5H9a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-.5"></svg:path></svg:g>`,
})
export class StreamlineSquareBracketsCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
