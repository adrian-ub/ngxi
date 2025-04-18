import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsEndpointsIcon],svg[eos-icons-endpoints-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.02 10.98h2v2h-2zm3.97 4.03h2v2h-2zm0-4.03h2v2h-2zm4.01 0h2v2h-2zm4.01 0h2v2h-2zm4.01 0h2v2h-2zm-4.01-3.97h2v2h-2zM5.99 17.99h4v4h-4zm8.02-15.98h4v4h-4z"></svg:path>`,
})
export class EosIconsEndpointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
