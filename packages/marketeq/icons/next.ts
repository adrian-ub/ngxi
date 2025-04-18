import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqNextIcon],svg[marketeq-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m35.417 25l-25 18.75V6.25z"></svg:path>`,
})
export class MarketeqNextIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
