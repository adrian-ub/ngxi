import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRightDirectionIcon],svg[marketeq-right-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.875 20.833H8.333a2.083 2.083 0 0 0-2.083 2.084v4.166a2.083 2.083 0 0 0 2.083 2.084h21.542"></svg:path><svg:path stroke="#306CFE" d="m29.875 29.167l-6.083 7.083l6.25 5.417l13.125-15.313a2.084 2.084 0 0 0 0-2.708L30.125 8.333l-6.25 5.417l6 7.083"></svg:path></svg:g>`,
})
export class MarketeqRightDirectionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
