import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLaundryBasket2Icon],svg[marketeq-laundry-basket-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 16.667v-6.25h-12.5v6.25a2.083 2.083 0 0 0 2.083 2.083h8.334a2.083 2.083 0 0 0 2.083-2.083"></svg:path><svg:path stroke="#306CFE" d="M6.25 10.417h37.5zm33.48 27.229l1.937-27.23H8.333l1.938 27.23a2.083 2.083 0 0 0 2.083 1.937h25.292a2.084 2.084 0 0 0 2.083-1.937"></svg:path></svg:g>`,
})
export class MarketeqLaundryBasket2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
