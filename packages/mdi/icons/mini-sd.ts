import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMiniSdIcon],svg[mdi-mini-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6l-2-2V6a2 2 0 0 0-2-2zm1 2h2v4H7zm3 0h2v4h-2zm3 0h2v4h-2z"></svg:path>`,
})
export class MdiMiniSdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
