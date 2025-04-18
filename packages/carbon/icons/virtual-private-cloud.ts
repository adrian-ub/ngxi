import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVirtualPrivateCloudIcon],svg[carbon-virtual-private-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20v-3a4 4 0 0 0-8 0v3a2.003 2.003 0 0 0-2 2v6a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2v-6a2.003 2.003 0 0 0-2-2m-6-3a2 2 0 0 1 4 0v3h-4Zm-2 11v-6h8l.001 6Z"></svg:path><svg:path fill="currentColor" d="M25.829 10.115a10.01 10.01 0 0 0-7.939-7.933a10.003 10.003 0 0 0-11.72 7.933A7.502 7.502 0 0 0 7.491 25H8v-2h-.505a5.502 5.502 0 0 1-.97-10.916l1.35-.245l.259-1.345a8.01 8.01 0 0 1 15.731 0l.259 1.345l1.349.245A5.502 5.502 0 0 1 24.508 23H24v2h.508a7.502 7.502 0 0 0 1.32-14.885"></svg:path>`,
})
export class CarbonVirtualPrivateCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
