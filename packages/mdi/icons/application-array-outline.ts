import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationArrayOutlineIcon],svg[mdi-application-array-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H3V6h18zM6 8v10h4v-2H8v-6h2V8zm10 8h-2v2h4V8h-4v2h2z"></svg:path>`,
})
export class MdiApplicationArrayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
