import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinecapSquareFilledIcon],svg[lsicon-linecap-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h12v12H2v-1h11V3H2zm4.558 5.5a1.5 1.5 0 1 1 .015 1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinecapSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
