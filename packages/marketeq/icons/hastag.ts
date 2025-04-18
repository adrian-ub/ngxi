import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHastagIcon],svg[marketeq-hastag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M8.333 31.25h31.25m-29.166-12.5h31.25z"></svg:path><svg:path stroke="#306CFE" d="m13.5 43.75l10.063-37.5m12.937 0l-10.062 37.5z"></svg:path></svg:g>`,
})
export class MarketeqHastagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
