import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiExclamationIcon],svg[mdi-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4h2v11h-2zm2 14v2h-2v-2z"></svg:path>`,
})
export class MdiExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
