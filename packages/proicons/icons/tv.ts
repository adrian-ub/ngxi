import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTvIcon],svg[proicons-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="18.5" height="13" x="2.75" y="4" rx="3"></svg:rect><svg:path d="M7 20h10"></svg:path></svg:g>`,
})
export class ProiconsTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
