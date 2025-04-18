import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentQrCode28FilledIcon],svg[fluent-qr-code-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.335 15v3.333h3.332v3.332H25V25h-3.333v-3.333h-3.332V25H15v-3.333h3.333v-3.333H15V15zM10.5 15a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 22.5v-5A2.5 2.5 0 0 1 5.5 15zm0 2h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m-.75 1.25v3.5h-3.5v-3.5zM25 15v3.333h-3.333V15zM10.5 3A2.5 2.5 0 0 1 13 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 10.5v-5A2.5 2.5 0 0 1 5.5 3zm12 0A2.5 2.5 0 0 1 25 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5v-5A2.5 2.5 0 0 1 17.5 3zm-12 2h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m12 0h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5m-.75 1.25v3.5h-3.5v-3.5zm-12.003.002v3.495H6.253V6.252z"></svg:path>`,
})
export class FluentQrCode28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
