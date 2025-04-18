import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSquareRootIcon],svg[marketeq-square-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.25 25h2.73a2.08 2.08 0 0 1 1.937 1.354l5.75 15.313l5.937-31.625a2.08 2.08 0 0 1 2.084-1.709H43.75"></svg:path>`,
})
export class MarketeqSquareRootIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
