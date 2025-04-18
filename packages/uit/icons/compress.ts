import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitCompressIcon],svg[uit-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 16h-5a.5.5 0 0 0 0 1H7v4.5a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.5-.5m9-8h5a.5.5 0 0 0 0-1H17V2.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5m-9-6a.5.5 0 0 0-.5.5V7H2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m14 14h-5a.5.5 0 0 0-.5.5v5a.5.5 0 1 0 1 0V17h4.5a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
