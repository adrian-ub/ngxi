import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFastRewindIcon],svg[ci-fast-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 18l-8.5-6L20 6v12Zm-9 0l-8.5-6L11 6v12Z"></svg:path>`,
})
export class CiFastRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
