import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationBracesOutlineIcon],svg[mdi-application-braces-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H3V6h18zM9 8c-1.1 0-2 .9-2 2s-.9 2-2 2v2c1.1 0 2 .9 2 2s.9 2 2 2h2v-2H9v-1c0-1.1-.9-2-2-2c1.1 0 2-.9 2-2v-1h2V8m4 0c1.1 0 2 .9 2 2s.9 2 2 2v2c-1.1 0-2 .9-2 2s-.9 2-2 2h-2v-2h2v-1c0-1.1.9-2 2-2c-1.1 0-2-.9-2-2v-1h-2V8z"></svg:path>`,
})
export class MdiApplicationBracesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
