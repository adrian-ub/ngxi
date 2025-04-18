import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonChequeDuotoneIcon],svg[iconamoon-cheque-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 9h3m-3-4h10"></svg:path></svg:g>`,
})
export class IconamoonChequeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
