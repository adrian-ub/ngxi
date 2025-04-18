import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDebugOffIcon],svg[pixelarticons-debug-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h2v2h-2zm4 7h-2V6h-2V4h-2v2h-2v2h4v5h2v2h4v-2h-4v-2h2zm0 0V7h2v2zM8 20v-9H6V9H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h10v-2zm2-5h2v2h-2zM2 2h2v2H2zm4 4H4V4h2zm2 2H6V6h2zm2 2H8V8h2zm0 0v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2z"></svg:path>`,
})
export class PixelarticonsDebugOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
