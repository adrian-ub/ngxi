import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineXboxIcon],svg[streamline-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M2.285 2.526c3.785.296 8.775 5.102 8.95 9.405"></svg:path><svg:path d="M11.716 2.526c-3.786.296-8.776 5.102-8.95 9.405"></svg:path></svg:g>`,
})
export class StreamlineXboxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
