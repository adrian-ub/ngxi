import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMicrophone1Icon],svg[tdesign-microphone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a5 5 0 0 1 10 0v5a5 5 0 0 1-10 0zm5-3a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3m-6 7v1a6 6 0 0 0 12 0v-1h2v1a8 8 0 0 1-7 7.938V20h5v2H6v-2h5v-1.062A8 8 0 0 1 4 11v-1z"></svg:path>`,
})
export class TdesignMicrophone1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
