import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBedroom4Icon],svg[marketeq-bedroom-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 22.917h12.5v12.5H6.25v-12.5m37.5 16.666V10.417M6.25 39.583v-6.25z"></svg:path><svg:path stroke="#344054" d="M31.25 27.083h-25v-6.25a2.083 2.083 0 0 1 2.083-2.083h20.834a2.083 2.083 0 0 1 2.083 2.083z"></svg:path></svg:g>`,
})
export class MarketeqBedroom4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
