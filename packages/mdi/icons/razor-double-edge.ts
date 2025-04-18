import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRazorDoubleEdgeIcon],svg[mdi-razor-double-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8c-.55 0-1-.45-1-1s.45-1 1-1V5H4v1c.55 0 1 .45 1 1s-.45 1-1 1H2v7h2c.55 0 1 .45 1 1s-.45 1-1 1v1h16v-1c-.55 0-1-.45-1-1s.45-1 1-1h2V8zm0 4h-1v1h-2v-1h-3.59c-.21.58-.76 1-1.41 1s-1.2-.42-1.41-1H7v1H5v-1H4v-1h1v-1h2v1h3.59c.21-.58.76-1 1.41-1s1.2.42 1.41 1H17v-1h2v1h1z"></svg:path>`,
})
export class MdiRazorDoubleEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
