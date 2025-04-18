import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlugConnected32RegularIcon],svg[fluent-plug-connected-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.454 6.526a3.25 3.25 0 0 0 0 4.597l7.426 7.424a3.25 3.25 0 0 0 4.596 0l.036-.037a8.5 8.5 0 0 0 .666-11.272l3.53-3.53a1 1 0 0 0-1.415-1.414l-3.53 3.53a8.5 8.5 0 0 0-11.272.666zm1.415 3.182a1.25 1.25 0 0 1 0-1.768l.036-.036a6.5 6.5 0 1 1 9.193 9.192l-.036.036a1.25 1.25 0 0 1-1.768 0zm3.68 15.765a3.25 3.25 0 0 0 0-4.596l-7.425-7.424a3.25 3.25 0 0 0-4.596 0l-.036.036a8.5 8.5 0 0 0-.666 11.273l-3.53 3.53a1 1 0 1 0 1.415 1.413l3.53-3.529a8.5 8.5 0 0 0 11.272-.666zm-1.414-3.182a1.25 1.25 0 0 1 0 1.768l-.036.037a6.5 6.5 0 0 1-9.193-9.192l.036-.036a1.25 1.25 0 0 1 1.768 0z"></svg:path>`,
})
export class FluentPlugConnected32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
