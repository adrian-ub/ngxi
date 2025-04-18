import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStepIcon],svg[material-symbols-light-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.692 14.904q-1.063 0-1.791-.738q-.728-.737-.728-1.8t.728-1.802t1.791-.737q1.045 0 1.782.737t.738 1.801t-.738 1.801t-1.782.738m-9.365 1.808l-.708-.695l3.094-3.151H2.77v-1h8.964L8.619 8.727L9.327 8l4.327 4.366z"></svg:path>`,
})
export class MaterialSymbolsLightStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
