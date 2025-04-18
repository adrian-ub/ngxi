import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHotel2Icon],svg[marketeq-hotel-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25h-8.333v12.5H25z"></svg:path><svg:path stroke="#306CFE" d="M43.75 43.75H6.25m27.083 0h-25V16.083A2.08 2.08 0 0 1 9.75 14l23.583-7.75zm8.334-22.917a2.083 2.083 0 0 0-2.084-2.083h-6.25v25h8.334z"></svg:path></svg:g>`,
})
export class MarketeqHotel2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
