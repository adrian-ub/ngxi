import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSimIcon],svg[mdi-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4a2 2 0 0 0-2-2h-8L4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9 19H7v-2h2zm8 0h-2v-2h2zm-8-4H7v-4h2zm4 4h-2v-4h2zm0-6h-2v-2h2zm4 2h-2v-4h2z"></svg:path>`,
})
export class MdiSimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
