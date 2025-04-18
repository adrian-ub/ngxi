import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularMoneyBill1Icon],svg[fa6-regular-money-bill-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 112c0 35.3-28.7 64-64 64v160c35.3 0 64 28.7 64 64h352c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 128a112 112 0 1 1 224 0a112 112 0 1 1-224 0m80-48c0 8.8 7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8v-80c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"></svg:path>`,
})
export class Fa6RegularMoneyBill1Icon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
