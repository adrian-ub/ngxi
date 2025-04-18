import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlertMinusIcon],svg[mdi-alert-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19c0-2.79 1.91-5.13 4.5-5.8L12 2L1 21h13.35c-.22-.63-.35-1.3-.35-2m-1-1h-2v-2h2zm0-4h-2v-4h2zm11 4v2h-8v-2z"></svg:path>`,
})
export class MdiAlertMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
