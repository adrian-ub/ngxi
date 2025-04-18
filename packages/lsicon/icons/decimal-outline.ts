import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDecimalOutlineIcon],svg[lsicon-decimal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14 4h-4v4h3.5v4h-4M8 11.995h.005V12H8zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0ZM2 12V4h4v8z"></svg:path>`,
})
export class LsiconDecimalOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
