import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCancelOctagonIcon],svg[proicons-cancel-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M7.583 3.336a2 2 0 0 1 1.414-.586h6.006a2 2 0 0 1 1.414.586l4.247 4.247a2 2 0 0 1 .586 1.414v6.006a2 2 0 0 1-.586 1.414l-4.247 4.247a2 2 0 0 1-1.414.586H8.997a2 2 0 0 1-1.414-.586l-4.247-4.247a2 2 0 0 1-.586-1.414V8.997a2 2 0 0 1 .586-1.414z"></svg:path><svg:path d="m8.75 8.75l6.5 6.5m0-6.5l-6.5 6.5"></svg:path></svg:g>`,
})
export class ProiconsCancelOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
