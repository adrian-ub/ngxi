import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFastForwardBackIcon],svg[mage-fast-forward-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 17.494V6.506a1.43 1.43 0 0 0-2.346-1.073l-6.41 5.48a1.43 1.43 0 0 0 0 2.174l6.41 5.48a1.43 1.43 0 0 0 2.346-1.073"></svg:path><svg:path d="M11.993 17.494V6.506a1.43 1.43 0 0 0-2.347-1.073l-6.395 5.48a1.43 1.43 0 0 0 0 2.174l6.395 5.48a1.43 1.43 0 0 0 2.347-1.073"></svg:path></svg:g>`,
})
export class MageFastForwardBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
