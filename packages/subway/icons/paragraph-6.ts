import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayParagraph6Icon],svg[subway-paragraph-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 456.5h256v-64H256zM0 349.8h512v-64H0zm0-106.6h512v-64H0zM0 72.5v64h512v-64z"></svg:path>`,
})
export class SubwayParagraph6Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
