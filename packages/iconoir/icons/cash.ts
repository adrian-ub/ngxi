import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCashIcon],svg[iconoir-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"></svg:path><svg:path d="M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m6.5-2.99l.01-.011M5.5 12.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirCashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
