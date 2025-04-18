import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRotateLockIcon],svg[marketeq-rotate-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 29.167h12.5a2.083 2.083 0 0 0 2.083-2.084V18.75a2.083 2.083 0 0 0-2.083-2.083h-12.5a2.083 2.083 0 0 0-2.084 2.083v8.333a2.083 2.083 0 0 0 2.084 2.084M31.25 12.5v4.167h8.333V12.5a4.167 4.167 0 0 0-4.166-4.167v0A4.167 4.167 0 0 0 31.25 12.5"></svg:path><svg:path stroke="#306CFE" d="M43.75 37.5v2.083a2.084 2.084 0 0 1-2.083 2.084H8.333a2.083 2.083 0 0 1-2.083-2.084V18.75a2.083 2.083 0 0 1 2.083-2.083H18.75"></svg:path><svg:path stroke="#306CFE" d="M6.25 25v8.333l4.167-1.041v-6.25z"></svg:path></svg:g>`,
})
export class MarketeqRotateLockIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
