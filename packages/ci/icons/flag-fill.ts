import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFlagFillIcon],svg[ci-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.66 4.3a1 1 0 0 0-.98-.8H5.5a1 1 0 0 0-1 1v15a1 1 0 1 0 2 0v-6h5.6l.24 1.2c.09.468.503.805.98.8h5.18a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-4.6l-.24-1.2Z"></svg:path>`,
})
export class CiFlagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
