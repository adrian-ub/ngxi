import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqVase2Icon],svg[marketeq-vase-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M32.063 21.52a10.2 10.2 0 0 1 3.354 7.25a48.7 48.7 0 0 1-1.646 13.418a2.08 2.08 0 0 1-2.084 1.562H18.272a2.08 2.08 0 0 1-2.084-1.562a48.7 48.7 0 0 1-1.604-13.417a10.2 10.2 0 0 1 3.334-7.25a8.33 8.33 0 0 0 2.916-6.125V6.25h8.334v9.146a8.33 8.33 0 0 0 2.895 6.125"></svg:path><svg:path stroke="#344054" d="M31.25 6.25h-12.5"></svg:path></svg:g>`,
})
export class MarketeqVase2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
