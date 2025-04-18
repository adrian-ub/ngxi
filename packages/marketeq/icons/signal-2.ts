import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSignal2Icon],svg[marketeq-signal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M11.75 38.25a18.75 18.75 0 0 1 0-26.5m5.875 5.875a10.417 10.417 0 0 0 0 14.75M38.25 38.25a18.75 18.75 0 0 0 0-26.5m-5.875 20.625a10.415 10.415 0 0 0 0-14.75"></svg:path></svg:g>`,
})
export class MarketeqSignal2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
