import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsEditAltIcon],svg[lets-icons-edit-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m6 21l-.19-3.025C5.372 10.944 10.956 5 18 5l-1.217.974A10.08 10.08 0 0 0 13 13.844a3.36 3.36 0 0 1-4.064 3.285L6 16.5"></svg:path>`,
})
export class LetsIconsEditAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
