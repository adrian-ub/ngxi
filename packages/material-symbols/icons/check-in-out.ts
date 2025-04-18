import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCheckInOutIcon],svg[material-symbols-check-in-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.525 19Q5.25 19 4.4 18.15t-.85-2.125t.85-2.137t2.125-.863t2.125.85T9.5 16t-.85 2.137T6.525 19m-2.7-8.025V5H5.1v5.975zm2.7 6.875q.775 0 1.275-.525T8.3 16t-.488-1.312t-1.287-.513q-.775 0-1.275.513T4.75 16t.5 1.325t1.275.525m-.275-6.875V5h1.4L9.9 8.8l-.05-.95V5h1.25v5.975H9.825l-2.4-4.025l.075.95v3.075zM12.8 19q-1.05 0-1.675-.675t-.625-1.8v-3.5h1.225V16.6q0 .525.313.875t.762.35t.75-.35t.3-.875v-3.575h1.225v3.5q0 1.125-.625 1.8T12.8 19m4.85 0v-4.8h-1.6v-1.175h4.4V14.2h-1.575V19z"></svg:path>`,
})
export class MaterialSymbolsCheckInOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
