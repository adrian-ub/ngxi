import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickRightIcon],svg[cil-arrow-thick-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254.3 496h-38.275l-.008-143.937H16v-192h200.007L216 16.048l38.688.035l239.948 240.235ZM48 320.063h200.015l.007 137.006l201.342-200.8L248 54.672l.008 137.391H48Z"></svg:path>`,
})
export class CilArrowThickRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
