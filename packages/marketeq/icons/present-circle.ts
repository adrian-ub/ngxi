import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPresentCircleIcon],svg[marketeq-present-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 27.083a5.208 5.208 0 1 0 0-10.416a5.208 5.208 0 0 0 0 10.416"></svg:path><svg:path stroke="#306CFE" d="m28.333 35.417l5 6.25m6.25-6.25H10.417a2.083 2.083 0 0 1-2.084-2.084v-25h33.334v25a2.083 2.083 0 0 1-2.084 2.084M6.25 8.333h37.5zm15.417 27.084l-5 6.25z"></svg:path></svg:g>`,
})
export class MarketeqPresentCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
