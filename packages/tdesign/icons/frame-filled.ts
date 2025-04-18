import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFrameFilledIcon],svg[tdesign-frame-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v9h9zm2 0v9h9V2zm9 11h-9v9h9zm-11 9v-9H2v9z"></svg:path>`,
})
export class TdesignFrameFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
