import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBlockHelperIcon],svg[mdi-block-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a12 12 0 0 1 12 12a12 12 0 0 1-12 12A12 12 0 0 1 0 12A12 12 0 0 1 12 0m0 2A10 10 0 0 0 2 12c0 2.4.85 4.6 2.26 6.33L18.33 4.26A10 10 0 0 0 12 2m0 20a10 10 0 0 0 10-10c0-2.4-.85-4.6-2.26-6.33L5.67 19.74A10 10 0 0 0 12 22"></svg:path>`,
})
export class MdiBlockHelperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
