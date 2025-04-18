import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNurseHatIcon],svg[streamline-nurse-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 8.5h3M7 7v3m6.5-4.5a21.7 21.7 0 0 0-13 0l2 7h9z"></svg:path><svg:path d="m11.39 5l-1.17-2.8a1 1 0 0 0-1-.7H4.74a1 1 0 0 0-1 .7L2.61 5"></svg:path></svg:g>`,
})
export class StreamlineNurseHatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
