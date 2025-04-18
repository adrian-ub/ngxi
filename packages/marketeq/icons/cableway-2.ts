import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCableway2Icon],svg[marketeq-cableway-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 43.75V25a2.083 2.083 0 0 1 2.083-2.083h8.334A2.083 2.083 0 0 1 31.25 25v18.75"></svg:path><svg:path stroke="#306CFE" d="M25 6.25v8.333M41.667 29.73l-3.563 12.5a2.084 2.084 0 0 1-2.083 1.521H13.979a2.08 2.08 0 0 1-2.083-1.52l-3.563-12.5a2.1 2.1 0 0 1 0-1.126l3.563-12.5a2.08 2.08 0 0 1 2.083-1.52h22.042a2.08 2.08 0 0 1 2.083 1.52l3.563 12.5c.103.368.103.757 0 1.125M14.583 6.25h20.834z"></svg:path></svg:g>`,
})
export class MarketeqCableway2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
