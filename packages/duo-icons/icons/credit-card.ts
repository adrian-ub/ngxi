import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsCreditCardIcon],svg[duo-icons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 4a3 3 0 0 1 3 3v1H2V7a3 3 0 0 1 3-3zm-1 10h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
