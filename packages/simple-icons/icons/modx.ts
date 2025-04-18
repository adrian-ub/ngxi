import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsModxIcon],svg[simple-icons-modx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.145 9.49l4.47-7.19H12.118l-1.24 2.023zM2.92 0v11.497l2.48 1.55l13.435-3.1zm18.16 24V12.503l-1.984-1.263l-5.168 8.267zM5.165 14.053l-4.78 7.648h11.497L18.6 10.953Z"></svg:path>`,
})
export class SimpleIconsModxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
