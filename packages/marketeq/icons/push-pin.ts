import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPushPinIcon],svg[marketeq-push-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25v12.5"></svg:path><svg:path stroke="#306CFE" d="M14.583 6.25h20.834m-.23 17.604a4.17 4.17 0 0 1 2.313 3.73v3.666h-25v-3.667a4.17 4.17 0 0 1 2.313-3.729l1.854-.937L18.75 6.25h12.5l2.083 16.667z"></svg:path></svg:g>`,
})
export class MarketeqPushPinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
