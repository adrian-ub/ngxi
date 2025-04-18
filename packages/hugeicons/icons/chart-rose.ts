import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChartRoseIcon],svg[hugeicons-chart-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.713 7.975c-3.108 0-5.628 2.255-5.628 5.038h5.628z"></svg:path><svg:path d="M2.535 15.926c1.238 2.442 3.986 4.14 7.177 4.14v-7.053h-4.84c-1.464 0-2.196 0-2.64.719c-.446.72-.196 1.21.303 2.194m10.18 5.751c4.128-1.146 7.127-4.592 7.127-8.664H9.712v6.046c0 1.473 0 2.21.6 2.664c.601.453 1.202.287 2.403-.046m8.925-11.643c-1.187-3.82-4.602-6.809-8.913-7.774c-1.25-.28-1.874-.42-2.444.034s-.57 1.188-.57 2.658v8.06h9.341c1.48 0 2.22 0 2.675-.614c.456-.614.275-1.197-.088-2.364"></svg:path></svg:g>`,
})
export class HugeiconsChartRoseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
