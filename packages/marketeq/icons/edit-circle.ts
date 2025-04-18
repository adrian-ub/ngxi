import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqEditCircleIcon],svg[marketeq-edit-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m28.708 27.188l-5.791-.105v-5.791L36.312 7.896a2.083 2.083 0 0 1 2.938 0l2.958 2.958a2.083 2.083 0 0 1 0 2.938z"></svg:path><svg:path stroke="#306CFE" d="M43.75 25A18.75 18.75 0 1 1 25 6.25"></svg:path></svg:g>`,
})
export class MarketeqEditCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
