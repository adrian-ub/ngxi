import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelDockbottomIcon],svg[raphael-dockbottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.083 7.333v16.334h24.833V7.333zm21.832 9.5H6.083v-6.5h18.833z"></svg:path>`,
})
export class RaphaelDockbottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
