import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAntennaOffIcon],svg[iconoir-antenna-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M12 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="m7 23l1.111-4M17 23l-1.111-4M9.5 14l-1.389 5M9.5 14h4m-4 0l.8-2.88M8.11 19h7.778m0 0l-1.184-4.264M11.445 7L12 5l1.047 3.768M3 3l18 18"></svg:path></svg:g>`,
})
export class IconoirAntennaOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
