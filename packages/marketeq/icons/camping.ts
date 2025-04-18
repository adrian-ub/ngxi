import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCampingIcon],svg[marketeq-camping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.27 33.854l-6.603 9.896h16.666l-6.604-9.896a2.083 2.083 0 0 0-3.458 0"></svg:path><svg:path stroke="#306CFE" d="m20.833 6.25l20.98 34.333a2.085 2.085 0 0 1-1.771 3.167H9.958a2.083 2.083 0 0 1-1.77-3.167L29.167 6.25"></svg:path></svg:g>`,
})
export class MarketeqCampingIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
