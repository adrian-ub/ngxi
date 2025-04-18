import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPianoFilledIcon],svg[tdesign-piano-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm20 8h-2v5h-2v-5h-2v5h-2v-5h-2v5H9v-5H7v5H5v-5H3v8h18z"></svg:path>`,
})
export class TdesignPianoFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
