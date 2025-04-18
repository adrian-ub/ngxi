import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ExclamationMarkIcon],svg[icons8-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v16h6V4zm2 2h2v12h-2zm-2 16v6h6v-6zm2 2h2v2h-2z"></svg:path>`,
})
export class Icons8ExclamationMarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
