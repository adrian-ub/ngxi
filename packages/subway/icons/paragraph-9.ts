import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayParagraph9Icon],svg[subway-paragraph-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 236.7h341.3v-64H0zm0 106.6h341.3v-64H0zM0 130h341.3V66H0zm0 320h341.3v-64H0zm426.7-213.3H512v-64h-85.3zm0 213.3H512v-64h-85.3zm0-384v64H512V66zm0 277.3H512v-64h-85.3z"></svg:path>`,
})
export class SubwayParagraph9Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
