import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaBBoxIcon],svg[mdi-alpha-b-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m10 7.5V9a2 2 0 0 0-2-2H9v10h4a2 2 0 0 0 2-2v-1.5c0-.8-.7-1.5-1.5-1.5c.8 0 1.5-.7 1.5-1.5M13 15h-2v-2h2zm0-4h-2V9h2z"></svg:path>`,
})
export class MdiAlphaBBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
