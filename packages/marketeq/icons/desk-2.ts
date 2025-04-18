import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDesk2Icon],svg[marketeq-desk-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M41.667 20.833V37.5m-33.334-25v25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5h37.5M25 20.833h16.667V12.5H25zm0 8.334h16.667v-8.334H25z"></svg:path></svg:g>`,
})
export class MarketeqDesk2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
