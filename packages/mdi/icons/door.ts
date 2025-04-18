import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDoorIcon],svg[mdi-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3c-1.11 0-2 .89-2 2v16h12V5c0-1.11-.89-2-2-2zm0 2h8v14H8zm5 6v2h2v-2z"></svg:path>`,
})
export class MdiDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
