import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStopCircleSolidIcon],svg[la-stop-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.85 3 3 8.85 3 16s5.85 13 13 13s13-5.85 13-13S23.15 3 16 3m0 2c6.05 0 11 4.95 11 11s-4.95 11-11 11S5 22.05 5 16S9.95 5 16 5m-5 6v10h10V11zm2 2h6v6h-6z"></svg:path>`,
})
export class LaStopCircleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
