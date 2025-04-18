import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassNorthIcon],svg[lets-icons-compass-north-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m6.2 20.634l5.668-10.393a.15.15 0 0 1 .264 0L17.8 20.634a.15.15 0 0 1-.187.211l-4.536-1.814a.15.15 0 0 1-.092-.113l-.837-4.606c-.03-.164-.266-.164-.296 0l-.837 4.606a.15.15 0 0 1-.092.113l-4.536 1.814a.15.15 0 0 1-.187-.21"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 9V3.12a.05.05 0 0 1 .085-.035l5.83 5.83A.05.05 0 0 0 15 8.879V3"></svg:path></svg:g>`,
})
export class LetsIconsCompassNorthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
