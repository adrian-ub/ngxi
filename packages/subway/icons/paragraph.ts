import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayParagraphIcon],svg[subway-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 451h512v-64H0zm0-106.7h512v-64H0zm0-106.6h512v-64H0zM0 67v64h512V67z"></svg:path>`,
})
export class SubwayParagraphIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
