import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRazorSingleEdgeIcon],svg[mdi-razor-single-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5v3H2V5zm0 8v5H2v-5h1.5c.83 0 1.5-.67 1.5-1.5S4.33 10 3.5 10H2V9h20v1h-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5zm-9-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1z"></svg:path>`,
})
export class MdiRazorSingleEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
