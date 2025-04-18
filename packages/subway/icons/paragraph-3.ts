import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayParagraph3Icon],svg[subway-paragraph-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 458.5h256v-64H256zM0 351.8h512v-64H0zm256-106.6h256v-64H256zM0 74.5v64h512v-64z"></svg:path>`,
})
export class SubwayParagraph3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
