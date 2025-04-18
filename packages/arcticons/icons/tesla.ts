import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTeslaIcon],svg[arcticons-tesla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.28A50.8 50.8 0 0 1 24 6.095a50.8 50.8 0 0 1 19.5 4.185"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.479 14.678A10.7 10.7 0 0 1 7.556 12.8c4.22-2.427 12.03-3.26 12.03-3.26L24 41.906l4.414-32.364s7.81.832 12.03 3.259a10.7 10.7 0 0 1-2.923 1.878"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.586 9.541L24 13.431l4.414-3.89"></svg:path>`,
})
export class ArcticonsTeslaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
