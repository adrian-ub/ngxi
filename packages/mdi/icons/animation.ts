import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAnimationIcon],svg[mdi-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c-1.11 0-2 .89-2 2v10h2V4h10V2zm4 4c-1.11 0-2 .89-2 2v10h2V8h10V6zm4 4c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2v-8c0-1.11-.89-2-2-2z"></svg:path>`,
})
export class MdiAnimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
