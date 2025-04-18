import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSandFilledIcon],svg[lsicon-sand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.268 5H4v1h3a2 2 0 1 0-1.732-1M3 6H2V5h1zm8.085 1H9v1h3.5a1.5 1.5 0 1 0-1.415-1M8 7v1H2V7zM6 9v1H2V9zm3.5 1H7V9h4.5a2.5 2.5 0 1 1-2 1" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSandFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
