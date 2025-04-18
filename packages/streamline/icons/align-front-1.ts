import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignFront1Icon],svg[streamline-align-front-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 13.5h8.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1"></svg:path><svg:path d="M.5 10.5v-9a1 1 0 0 1 1-1h9"></svg:path></svg:g>`,
})
export class StreamlineAlignFront1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
