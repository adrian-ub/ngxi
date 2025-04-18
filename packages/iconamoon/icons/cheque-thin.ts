import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonChequeThinIcon],svg[iconamoon-cheque-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 9h3m-3-4h10"></svg:path>`,
})
export class IconamoonChequeThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
