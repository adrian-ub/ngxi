import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSwapHorizontalHiddenIcon],svg[mdi-swap-horizontal-hidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 5l4 4l-4 4zm-1 3h-3v2h3zm-4 2V8h-2v2zm-9 5l4-4v8zm5 1h3v-2H8zm4-2v2h2v-2z"></svg:path>`,
})
export class MdiSwapHorizontalHiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
