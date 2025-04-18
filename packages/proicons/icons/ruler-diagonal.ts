import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRulerDiagonalIcon],svg[proicons-ruler-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:rect width="9" height="19.5" x="15.712" y="1.924" stroke-linejoin="round" rx="2" transform="rotate(45 15.712 1.924)"></svg:rect><svg:path d="M8.818 8.818L12 12m0-6.364l3.182 3.182M5.636 12l3.182 3.182"></svg:path></svg:g>`,
})
export class ProiconsRulerDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
