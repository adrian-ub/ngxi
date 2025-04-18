import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaBBoxOutlineIcon],svg[mdi-alpha-b-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10.5c0 .8-.7 1.5-1.5 1.5c.8 0 1.5.7 1.5 1.5V15a2 2 0 0 1-2 2H9V7h4a2 2 0 0 1 2 2zM13 15v-2h-2v2zm0-4V9h-2v2zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0v14h14V5z"></svg:path>`,
})
export class MdiAlphaBBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
