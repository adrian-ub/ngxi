import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ShutdownIcon],svg[icons8-shutdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v12h2V4zm-3 .688C7.346 6.338 4 10.788 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.213-3.346-9.662-8-11.313v2.157C23.526 8.39 26 11.91 26 16c0 5.514-4.486 10-10 10S6 21.514 6 16c0-4.09 2.474-7.61 6-9.156z"></svg:path>`,
})
export class Icons8ShutdownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
