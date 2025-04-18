import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCrystalBallIcon],svg[tabler-crystal-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.73 17.018a8 8 0 1 1 10.54 0"></svg:path><svg:path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2m6-12a3 3 0 0 0-3 3"></svg:path></svg:g>`,
})
export class TablerCrystalBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
