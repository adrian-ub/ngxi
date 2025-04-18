import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayParagraph7Icon],svg[subway-paragraph-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 464h256v-64H128zM0 357.3h512v-64H0zm0-106.6h512v-64H0zM0 80v64h512V80z"></svg:path>`,
})
export class SubwayParagraph7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
