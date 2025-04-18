import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBarCodeFilledIcon],svg[lsicon-bar-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 13V3h2v10zm3 0V3h1v10zm2.5 0V3h1v10zm2 0V3H11v10zm3.5 0V3h1v10zm2 0V3h1v10z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBarCodeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
