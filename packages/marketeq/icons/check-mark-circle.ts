import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCheckMarkCircleIcon],svg[marketeq-check-mark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m16.667 23.958l6.25 6.25l10.416-10.416"></svg:path><svg:path stroke="#306CFE" d="M43.75 25c0-10.355-8.395-18.75-18.75-18.75S6.25 14.645 6.25 25S14.645 43.75 25 43.75S43.75 35.355 43.75 25"></svg:path></svg:g>`,
})
export class MarketeqCheckMarkCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
