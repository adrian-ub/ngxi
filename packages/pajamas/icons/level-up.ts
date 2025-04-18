import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasLevelUpIcon],svg[pajamas-level-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.28 5.84a.75.75 0 0 1-1.06-1.06l3.25-3.25L8 1l.53.53l3.25 3.25a.75.75 0 0 1-1.06 1.06L8.75 3.87V12a1.5 1.5 0 0 0 1.5 1.5h4a.75.75 0 0 1 0 1.5h-4a3 3 0 0 1-3-3V3.87z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasLevelUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
