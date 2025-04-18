import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMaskIcon],svg[proicons-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M8.844 20.698a9.254 9.254 0 0 1 0-17.396a9.254 9.254 0 0 1 0 17.396"></svg:path></svg:g>`,
})
export class ProiconsMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
