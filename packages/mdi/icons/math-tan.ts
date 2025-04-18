import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMathTanIcon],svg[mdi-math-tan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v2h2v8h2V9h2V7zm9 0a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 2h2v2h-2zm5-2v10h2v-5l2 5h2V7h-2v5l-2-5z"></svg:path>`,
})
export class MdiMathTanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
