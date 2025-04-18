import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasCheckXsIcon],svg[pajamas-check-xs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.53 3.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.97.97l3.97-3.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasCheckXsIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
