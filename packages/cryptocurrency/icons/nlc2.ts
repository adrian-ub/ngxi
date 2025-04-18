import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyNlc2Icon],svg[cryptocurrency-nlc2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.151 13.719l1.842-3.743q.855-1.98 1.955-2.476H16q.815.289.815.908q0 .174-.606 1.495zm-2.916 5.928l-1.904-3.815q-.677 1.362-1.487 2.974q-2.402 5.24-4.766 5.694h14.585l2.852-4.374q-1.223 1.362-4.848 1.362H14.33zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M5 20.25h4.604l3.585-7.262l3.626 7.262h4.237q-.123-.083-.122-.413c0-1.118 4.033-10.728 6.07-11.264h-4.807l-3.912 7.922l-4.033-7.922H9.604q.896.66.896 1.403c0 2.102-4.319 9.573-5.5 10.274"></svg:path>`,
})
export class CryptocurrencyNlc2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
