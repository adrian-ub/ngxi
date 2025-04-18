import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSendIcon],svg[cil-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M474.444 19.857a20.34 20.34 0 0 0-21.592-2.781L33.737 213.8v38.066l176.037 70.414L322.69 496h38.074l120.3-455.4a20.34 20.34 0 0 0-6.62-20.743M337.257 459.693L240.2 310.37l149.353-163.582l-23.631-21.576L215.4 290.069L70.257 232.012L443.7 56.72Z"></svg:path>`,
})
export class CilSendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
