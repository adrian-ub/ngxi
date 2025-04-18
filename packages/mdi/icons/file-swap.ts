import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileSwapIcon],svg[mdi-file-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-6 10v-2h-4v2l-3-3l3-3v2h4v-2l3 3m-4-6V3.5L18.5 9Z"></svg:path>`,
})
export class MdiFileSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
