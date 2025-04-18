import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayParagraph4Icon],svg[subway-paragraph-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 464h256v-64H128zM0 357.3h512v-64H0zm128-170.6v64h256v-64zM0 80v64h512V80z"></svg:path>`,
})
export class SubwayParagraph4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
