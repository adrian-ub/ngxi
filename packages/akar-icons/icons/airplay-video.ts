import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAirplayVideoIcon],svg[akar-icons-airplay-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></svg:path><svg:path d="m12 16l6 5H6z"></svg:path></svg:g>`,
})
export class AkarIconsAirplayVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
