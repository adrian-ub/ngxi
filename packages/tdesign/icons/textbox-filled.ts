import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTextboxFilledIcon],svg[tdesign-textbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM6 8.5h5V18h2V8.5h5v-2H6z"></svg:path>`,
})
export class TdesignTextboxFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
