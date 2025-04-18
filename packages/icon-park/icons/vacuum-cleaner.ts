import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVacuumCleanerIcon],svg[icon-park-vacuum-cleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M26 22.5C26 22.5 26 13 26 10C26 7 28 4 32 4C36 4 38 7 38 10C38 13 38 34 38 34"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M32.75 34H43.25L44 40H32L32.75 34Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 40H25.8864C25.9491 40 26 39.9491 26 39.8864V23.2546C26 15.9343 20.0657 10 12.7454 10V10C9.57228 10 7 12.5723 7 15.7454V29"></svg:path><svg:circle cx="10" cy="34" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 10V29"></svg:path></svg:g>`,
})
export class IconParkVacuumCleanerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
