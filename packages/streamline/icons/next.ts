import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNextIcon],svg[streamline-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h10M7 10.5L10.5 7L7 3.5m6.5 0v7"></svg:path>`,
})
export class StreamlineNextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
