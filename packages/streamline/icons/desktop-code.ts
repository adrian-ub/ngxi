import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopCodeIcon],svg[streamline-desktop-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 10.5v-8A.5.5 0 0 0 13 2H1c-.265 0-.5.235-.5.5v8c0 .265.235.5.5.5h12c.265 0 .5-.235.5-.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M5 5L3.5 6.5L5 8m4-3l1.5 1.5L9 8"></svg:path></svg:g>`,
})
export class StreamlineDesktopCodeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
