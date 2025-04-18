import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsImagesAlt2Icon],svg[dashicons-images-alt2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14v11h-2v2h-2v2H1V7h2V5h2zm13 10V4H6v9zm-3-4c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m1 6v-1H5V6H4v9zM7 6l10 6H7zm7 11v-1H3V8H2v9z"></svg:path>`,
})
export class DashiconsImagesAlt2Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
