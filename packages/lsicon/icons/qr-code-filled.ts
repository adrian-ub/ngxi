import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconQrCodeFilledIcon],svg[lsicon-qr-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM3 3v3h3V3zm6-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm-7 7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm9 .5h1V9H9v1h1v1H9v3h2v-1h-1v-2h1v1h2v1h-1v1h2v-2h-1v-1h1V9h-1v2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconQrCodeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
