import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUnfoldLessIcon],svg[material-symbols-light-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.9 19.308l-.708-.708L12 14.792l3.808 3.808l-.708.708l-3.1-3.1zm3.1-10.1L8.192 5.4l.708-.708l3.1 3.1l3.1-3.1l.708.708z"></svg:path>`,
})
export class MaterialSymbolsLightUnfoldLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
