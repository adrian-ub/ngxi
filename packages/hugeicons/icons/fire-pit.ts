import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFirePitIcon],svg[hugeicons-fire-pit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.104 17.5c-.77-.928-.68-2.301-.406-3.184c4.477 2.184 5.061-1.816 4.725-2.816c1.505 1 2.965 4.419 1.414 6"></svg:path><svg:path d="M8.816 17.5C5.592 16.429 4.77 11.548 6.13 8.929c.995 2.141 2.62 2.141 2.62 2.141c-1.083-4.285 1.083-7.5 5.26-8.571c-.818 1.501-1.473 3.846.187 5.349c.352-.669 1.533-2.135 3.22-2.135c0 0-1.297 2.302.11 4.308c1.625 2.315 1.209 5.763-1.207 7.478m4.18.001h-17l.66 2.485c.335 1.26.681 1.515 2.062 1.515h11.556c1.38 0 1.727-.255 2.062-1.515zm-16.944 0H2.5m17.944 0H21.5"></svg:path></svg:g>`,
})
export class HugeiconsFirePitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
