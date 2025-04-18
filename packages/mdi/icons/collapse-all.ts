import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCollapseAllIcon],svg[mdi-collapse-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4H4v10H2V4a2 2 0 0 1 2-2h10zm4 2H8a2 2 0 0 0-2 2v10h2V8h10zm4 6v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m-2 3h-8v2h8z"></svg:path>`,
})
export class MdiCollapseAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
