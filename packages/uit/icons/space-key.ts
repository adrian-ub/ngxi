import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitSpaceKeyIcon],svg[uit-space-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 9a.5.5 0 0 0-.5.5V14H3V9.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class UitSpaceKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
