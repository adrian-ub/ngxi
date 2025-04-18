import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayParagraph8Icon],svg[subway-paragraph-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 351.3h85.3v-64H0zM0 138h85.3V74H0zm0 320h85.3v-64H0zm0-213.3h85.3v-64H0zM170.7 458H512v-64H170.7zm0-384v64H512V74zm0 170.7H512v-64H170.7zm0 106.6H512v-64H170.7z"></svg:path>`,
})
export class SubwayParagraph8Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
