import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrangeSendBackwardIcon],svg[mdi-arrange-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h14v14H2zm20 6v14H8v-4h10V8zM4 4v10h10V4z"></svg:path>`,
})
export class MdiArrangeSendBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
