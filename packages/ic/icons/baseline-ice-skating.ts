import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineIceSkatingIcon],svg[ic-baseline-ice-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8.5c0-.28.22-.5.5-.5h2.52L11 7H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3h-2v-2h3v-2.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H8.5c-.28 0-.5-.22-.5-.5M14 20H8v-2h6z"></svg:path>`,
})
export class IcBaselineIceSkatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
