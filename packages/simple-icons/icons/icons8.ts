import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsIcons8Icon],svg[simple-icons-icons8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0H0v24h12zm6 12a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 12a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path>`,
})
export class SimpleIconsIcons8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
