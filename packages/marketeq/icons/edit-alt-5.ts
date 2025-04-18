import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqEditAlt5Icon],svg[marketeq-edit-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.667 17.167L15.083 43.75H6.25v-8.833L32.833 8.333a6.25 6.25 0 0 1 8.834 0v0a6.25 6.25 0 0 1 0 8.834"></svg:path>`,
})
export class MarketeqEditAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
