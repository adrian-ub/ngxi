import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandEmptyIcon],svg[mdi-timer-sand-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v6l4 4l-4 4v6h12v-6l-4-4l4-4V2zm10 14.5V20H8v-3.5l4-4zm-4-5l-4-4V4h8v3.5z"></svg:path>`,
})
export class MdiTimerSandEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
