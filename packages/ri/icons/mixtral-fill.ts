import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMixtralFillIcon],svg[ri-mixtral-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h3.6v3.6h3.6v3.6h3.6V6.6h3.6V3H21v18h-3.6v-7.2h-3.6v3.6h-3.6v-3.6H6.6V21H3z"></svg:path>`,
})
export class RiMixtralFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
