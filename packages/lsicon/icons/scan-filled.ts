import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScanFilledIcon],svg[lsicon-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5H6v1H3v3H2zM13 3h-3V2h3.5a.5.5 0 0 1 .5.5V6h-1zm1 5.5H2v-1h12zM3 13v-3H2v3.5a.5.5 0 0 0 .5.5H6v-1zm10 0v-3h1v3.5a.5.5 0 0 1-.5.5H10v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScanFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
