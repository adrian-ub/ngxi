import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSalePercentOutlineIcon],svg[flowbite-sale-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.891 15.107L15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.85 2.85 0 0 0 2.176.902a2.845 2.845 0 0 1 2.94 2.94a2.85 2.85 0 0 0 .901 2.176a2.847 2.847 0 0 1 0 4.16a2.85 2.85 0 0 0-.901 2.175a2.843 2.843 0 0 1-2.94 2.94a2.85 2.85 0 0 0-2.176.902a2.847 2.847 0 0 1-4.16 0a2.85 2.85 0 0 0-2.176-.902a2.845 2.845 0 0 1-2.94-2.94a2.85 2.85 0 0 0-.901-2.176a2.85 2.85 0 0 1 0-4.16a2.85 2.85 0 0 0 .901-2.176a2.845 2.845 0 0 1 2.941-2.94a2.85 2.85 0 0 0 2.176-.901a2.847 2.847 0 0 1 4.159 0"></svg:path>`,
})
export class FlowbiteSalePercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
