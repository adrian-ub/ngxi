import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siFlareDuotoneIcon],svg[si-flare-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siFlareDuotone0)"><svg:path fill="currentColor" fill-opacity=".16" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 12H1m22 0h-6m-5 5v6m3.536-7.464l1.414 1.414m-9.9-9.9l1.414 1.414m7.072 0L16.95 7.05m-9.9 9.9l1.414-1.414M12 1v6m2 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="siFlareDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiFlareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
