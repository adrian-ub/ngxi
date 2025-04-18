import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsButtonIcon],svg[proicons-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="18.5" height="11" x="2.75" y="6.5" rx="4"></svg:rect><svg:path d="M7 12h10"></svg:path></svg:g>`,
})
export class ProiconsButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
