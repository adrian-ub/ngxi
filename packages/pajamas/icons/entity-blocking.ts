import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasEntityBlockingIcon],svg[pajamas-entity-blocking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9.5c.695 0 1.343-.203 1.887-.552L3.052 4.113A3.5 3.5 0 0 0 6 9.5M4.113 3.052l4.835 4.835a3.5 3.5 0 0 0-4.835-4.835M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10m10 1l-.53-.53l-2.25-2.25a.75.75 0 0 0-1.061 1.06l.97.97h-3.38a.75.75 0 0 0 0 1.5h3.38l-.97.97a.75.75 0 1 0 1.06 1.06l2.25-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasEntityBlockingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
