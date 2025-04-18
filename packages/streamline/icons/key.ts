import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineKeyIcon],svg[streamline-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.62 7.38L11.5 1.5l2 2m-4.25.25L11 5.5"></svg:path><svg:path d="M3.5 12.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class StreamlineKeyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
