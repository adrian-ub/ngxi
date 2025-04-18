import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirplaneLanding02Icon],svg[hugeicons-airplane-landing-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.498 20.001h16m1.55-8.96c1.173-.44 1.35-1.04 1.425-1.44c.125-.5-.175-1.775-.45-2.75a95 95 0 0 0-.555-2.05c-.245-.875-.845-.835-1.27-.775c-.175.038-1.4.37-1.6.47c-.675.405-.6 1.48-.8 2.18c-.225 1.025-.75 1.175-1.35 1.275c-2.1.15-6.75.525-6.75.525c-3.975.35-5.9 3.525-6.185 5.85c-.14.975.76 1.325 1.235 1.2l5.225-1.425c.4-.15.725-.025.95.125l2.325 1.525c.525.275 1 .3 1.425.2l2.175-.595c.45-.05.54-.264.6-.43c.088-.243-.102-.466-.325-.675c-.125-.175-.525-.603-.675-.768c-.2-.257-.69-.682-.65-.857c-.3-.125.77-.313 2.55-.8c1.011-.276 2.178-.59 2.7-.785" color="currentColor"></svg:path>`,
})
export class HugeiconsAirplaneLanding02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
