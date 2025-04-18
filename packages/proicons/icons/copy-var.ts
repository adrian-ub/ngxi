import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCopyVarIcon],svg[proicons-copy-var-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.869 5.75a3 3 0 0 0-3-3H7.211a3 3 0 0 0-3 3v9.579a3 3 0 0 0 3 3h6.658a3 3 0 0 0 3-3z"></svg:path><svg:path d="M19.79 6.67v8.579a6 6 0 0 1-6 6H8.132"></svg:path></svg:g>`,
})
export class ProiconsCopyVarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
