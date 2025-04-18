import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCopyIcon],svg[proicons-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.75 5.75a3 3 0 0 0-3-3h-6.5a3 3 0 0 0-3 3v9.5a3 3 0 0 0 3 3h6.5a3 3 0 0 0 3-3z"></svg:path><svg:path d="M19.75 6.75v8.5a6 6 0 0 1-6 6h-5.5"></svg:path></svg:g>`,
})
export class ProiconsCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
