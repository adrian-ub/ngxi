import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSave3FillIcon],svg[ri-save-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h14l2.707 2.707a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 1v5h9V4zm-1 8v7h12v-7zm7-7h2v3h-2z"></svg:path>`,
})
export class RiSave3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
