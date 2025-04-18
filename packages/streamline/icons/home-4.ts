import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHome4Icon],svg[streamline-home-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 8L7 1.5L13.5 8"></svg:path><svg:path d="M2.5 6v6.5h9V6"></svg:path></svg:g>`,
})
export class StreamlineHome4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
