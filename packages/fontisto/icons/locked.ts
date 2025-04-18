import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoLockedIcon],svg[fontisto-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 6.5V10H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2h-1.5V6.5a6.5 6.5 0 1 0-13 0M6 10V6.5a4 4 0 0 1 8 0V10zm2 5.5a2 2 0 1 1 3.092 1.676l-.008.005s.195 1.18.415 2.57v.001a.75.75 0 0 1-.749.749H9.248a.75.75 0 0 1-.749-.749v-.001l.415-2.57a2 2 0 0 1-.916-1.68z"></svg:path>`,
})
export class FontistoLockedIcon {
  readonly viewBox = input("0 0 20 24")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
