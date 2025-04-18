import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackTlIcon],svg[flagpack-tl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E31D1C" stroke="#F7FCFF" stroke-width="2" d="M0-1h-1v26h34V-1z"></svg:path><svg:path fill="#FECA00" fill-rule="evenodd" d="m0 0l24 12L0 24z" clip-rule="evenodd"></svg:path><svg:path fill="#272727" fill-rule="evenodd" d="m0 0l16 12L0 24z" clip-rule="evenodd"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="m6.648 14.409l-2.02 2.1l-.21-2.986l-2.576-1.586l2.686-.843l.44-2.958l1.859 2.342l2.712-.727l-1.402 2.776L9.5 15.203z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackTlIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
