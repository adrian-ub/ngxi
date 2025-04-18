import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignErrorIcon],svg[tdesign-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v14.5h-2V2zm-2 17h2.004v2.004H11z"></svg:path>`,
})
export class TdesignErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
