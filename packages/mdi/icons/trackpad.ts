import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrackpadIcon],svg[mdi-trackpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v8h16V5zm0 14h7v-4H4zm16 0v-4h-7v4z"></svg:path>`,
})
export class MdiTrackpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
