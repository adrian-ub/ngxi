import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibZorinIcon],svg[cib-zorin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.333 25.26l2.661 4.604h16.011l2.661-4.604zM32 16l-2.683 4.651H12.286l17.031-9.301zM0 16l2.683-4.651h17.031L2.683 20.65zm5.333-9.26l2.661-4.604h16.011l2.661 4.604z"></svg:path>`,
})
export class CibZorinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
