import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMIcon],svg[healthicons-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 17.524V36a2 2 0 1 1-4 0V12a2 2 0 0 1 3.536-1.28L24 20.876l8.464-10.156A2 2 0 0 1 36 12v24a2 2 0 1 1-4 0V17.524l-6.464 7.756a2 2 0 0 1-3.072 0z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
