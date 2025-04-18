import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicroSdIcon],svg[mdi-micro-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a2 2 0 0 0-2 2v7l-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm1 2h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"></svg:path>`,
})
export class MdiMicroSdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
