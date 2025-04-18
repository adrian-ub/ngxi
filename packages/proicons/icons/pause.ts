import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPauseIcon],svg[proicons-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="5" height="16.5" x="5" y="3.75" rx="2"></svg:rect><svg:rect width="5" height="16.5" x="14" y="3.75" rx="2"></svg:rect></svg:g>`,
})
export class ProiconsPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
