import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftAltCircleIcon],svg[marketeq-left-alt-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 19.604v1.23h8.333a2.083 2.083 0 0 1 2.084 2.083v4.166a2.083 2.083 0 0 1-2.084 2.084H25v1.229a2.083 2.083 0 0 1-3.562 1.458l-5.375-5.375a2.085 2.085 0 0 1 0-2.958l5.375-5.375A2.084 2.084 0 0 1 25 19.604"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqLeftAltCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
