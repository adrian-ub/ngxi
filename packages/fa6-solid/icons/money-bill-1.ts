import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidMoneyBill1Icon],svg[fa6-solid-money-bill-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm64 320H64v-64c35.3 0 64 28.7 64 64M64 192v-64h64c0 35.3-28.7 64-64 64m384 192c0-35.3 28.7-64 64-64v64zm64-192c-35.3 0-64-28.7-64-64h64zm-336 64a112 112 0 1 1 224 0a112 112 0 1 1-224 0m76-48c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h48c11 0 20-9 20-20s-9-20-20-20h-4v-68c0-11-9-20-20-20h-16c-11 0-20 9-20 20"></svg:path>`,
})
export class Fa6SolidMoneyBill1Icon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
