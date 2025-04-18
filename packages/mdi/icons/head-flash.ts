import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHeadFlashIcon],svg[mdi-head-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.2 3 6.2 6 6 9.7l-1.9 2.5c-.2.3 0 .8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.7c2.4-1.1 4-3.5 4-6.3c0-3.9-3.1-7-7-7m2 6l-3.1 6l.6-4h-2l2-5H15l-1.5 3z"></svg:path>`,
})
export class MdiHeadFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
