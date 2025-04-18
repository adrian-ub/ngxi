import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMicroscopeOutlineIcon],svg[flowbite-microscope-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.643 21h14m-3.35-12a5.42 5.42 0 0 1 1.35 3.591c0 2.987-2.396 5.409-5.352 5.409a5.34 5.34 0 0 1-4.648-2.725m-2-.275h6m.437-4.437L10.643 12m5.809-5.767l2.155-2.155M17.53 3l2.155 2.155M10.643 18v3m4-3v3m.731-15.845l-4.31 4.311l2.155 2.155l4.31-4.31z"></svg:path>`,
})
export class FlowbiteMicroscopeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
