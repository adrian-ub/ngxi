import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCreditCardSlashIcon],svg[iconoir-credit-card-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9h3M3 3l18 18m1-12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1m17 4V7a2 2 0 0 0-2-2H10m12 4h-8M9 9H6"></svg:path>`,
})
export class IconoirCreditCardSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
