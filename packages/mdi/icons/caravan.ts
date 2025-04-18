import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCaravanIcon],svg[mdi-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h8v-2h-2V9a2 2 0 0 0-2-2zm0 2h5v3H5zm8 0h4v3h-4zm-3 7a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiCaravanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
