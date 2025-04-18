import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextIndentIncreaseIcon],svg[proicons-text-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6.75 18.75h13.5M6.75 5.25h13.5M10.75 12h9.5"></svg:path><svg:path stroke-linejoin="round" d="m3.75 9l3 3l-3 3"></svg:path></svg:g>`,
})
export class ProiconsTextIndentIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
