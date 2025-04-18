import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCaravanIcon],svg[marketeq-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M38.542 33.333h6.25M36.27 18.208a8.33 8.33 0 0 0-7.896-5.708H7.292a2.083 2.083 0 0 0-2.084 2.083V31.25a2.083 2.083 0 0 0 2.084 2.083h4.166a4.167 4.167 0 0 1 8.334 0h18.75V25z"></svg:path><svg:path stroke="#344054" d="M28.125 20.833h-4.167m-4.166 12.5a4.167 4.167 0 1 1-8.335 0a4.167 4.167 0 0 1 8.335 0"></svg:path></svg:g>`,
})
export class MarketeqCaravanIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
