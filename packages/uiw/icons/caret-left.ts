import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwCaretLeftIcon],svg[uiw-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.42 2.296l-8.047 6.94A.92.92 0 0 0 5 10q0 .472.41.797l8.01 6.907q.48.402 1.032.267q.45-.131.548-.607v-14.7a.76.76 0 0 0-.526-.628q-.574-.137-1.054.26"></svg:path>`,
})
export class UiwCaretLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
