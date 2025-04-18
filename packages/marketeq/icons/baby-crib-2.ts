import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBabyCrib2Icon],svg[marketeq-baby-crib-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 25V12.5m0 20.833h2.084zm18.75 0h2.084zM25 12.5V25zm10.417 0V25z"></svg:path><svg:path stroke="#306CFE" d="M6.25 12.5V8.333m0 33.334h37.5V25H6.25zm0 0H25V25H6.25zM43.75 25V12.5H6.25V25zm0-12.5V8.333z"></svg:path></svg:g>`,
})
export class MarketeqBabyCrib2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
