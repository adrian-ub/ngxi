import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRulerIcon],svg[proicons-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:rect width="9.5" height="18.5" x="6.75" y="2.75" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M6.75 12h4.5m-4.5-4.5h4.5m-4.5 9h4.5"></svg:path></svg:g>`,
})
export class ProiconsRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
