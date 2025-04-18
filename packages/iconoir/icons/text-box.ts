import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTextBoxIcon],svg[iconoir-text-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 8v8m0-8H8m4 0h4"></svg:path><svg:path d="M21 13.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.5m18-3V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5.5m16.5 3v-3h3v3zm-18 0v-3h3v3z"></svg:path></svg:g>`,
})
export class IconoirTextBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
