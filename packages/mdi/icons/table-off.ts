import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableOffIcon],svg[mdi-table-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l2.11 2.11C3.08 5.38 3 5.68 3 6v12a2 2 0 0 0 2 2h13.11l2.73 2.73zm-12-9.46H5V8h1.11zm.89 6H5v-4h6zm2 0v-3.11L16.11 18zm0-8.2L7.2 4H19c1.11 0 2 .89 2 2v11.8l-2-2V14h-1.8l-2-2H19V8h-6z"></svg:path>`,
})
export class MdiTableOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
