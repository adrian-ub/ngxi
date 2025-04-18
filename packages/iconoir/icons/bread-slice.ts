import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBreadSliceIcon],svg[iconoir-bread-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 20V9S3 4 9.5 4H17c7 0 3 5 3 5v9a2 2 0 0 1-2 2z"></svg:path><svg:path d="M7 20H6a2 2 0 0 1-2-2V9S0 4 6.5 4H10"></svg:path></svg:g>`,
})
export class IconoirBreadSliceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
