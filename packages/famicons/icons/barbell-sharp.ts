import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBarbellSharpIcon],svg[famicons-barbell-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58z"></svg:path>`,
})
export class FamiconsBarbellSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
