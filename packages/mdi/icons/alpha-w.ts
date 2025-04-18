import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaWIcon],svg[mdi-alpha-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17a2 2 0 0 1-2-2V7h2v8h2V8h2v7h2V7h2v8a2 2 0 0 1-2 2z"></svg:path>`,
})
export class MdiAlphaWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
