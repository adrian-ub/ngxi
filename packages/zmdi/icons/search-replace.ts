import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSearchReplaceIcon],svg[zmdi-search-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 64q-38 0-67.5 24.5T45 149H2q8-54 49.5-91T149 21q62 0 106 44l44-44v128H171l54-54q-32-31-76-31m121 195l103 104l-32 31l-103-103q-40 29-89 29q-62 0-105-44L0 320V192h128l-54 54q31 31 75 31q39 0 68-24t37-61h43q-5 37-27 67"></svg:path>`,
})
export class ZmdiSearchReplaceIcon {
  readonly viewBox = input("0 0 376 400")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
