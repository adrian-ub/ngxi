import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiExclamationThickIcon],svg[mdi-exclamation-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h4v11h-4zm0 18v-4h4v4z"></svg:path>`,
})
export class MdiExclamationThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
