import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSignal20SolidIcon],svg[heroicons-signal-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.364 3.636a.75.75 0 0 0-1.06 1.06a7.5 7.5 0 0 1 0 10.607a.75.75 0 0 0 1.06 1.061a9 9 0 0 0 0-12.728M4.697 4.697a.75.75 0 0 0-1.061-1.061a9 9 0 0 0 0 12.728a.75.75 0 1 0 1.06-1.06a7.5 7.5 0 0 1 0-10.607"></svg:path><svg:path d="M12.475 6.464a.75.75 0 0 1 1.06 0a5 5 0 0 1 0 7.072a.75.75 0 0 1-1.06-1.061a3.5 3.5 0 0 0 0-4.95a.75.75 0 0 1 0-1.06m-4.95-.001a.75.75 0 0 1 0 1.061a3.5 3.5 0 0 0 0 4.95a.75.75 0 0 1-1.06 1.06a5 5 0 0 1 0-7.07a.75.75 0 0 1 1.06 0M11 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class HeroiconsSignal20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
