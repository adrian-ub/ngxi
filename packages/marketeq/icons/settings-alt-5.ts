import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSettingsAlt5Icon],svg[marketeq-settings-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M33.333 21.542v-4.875h-4.875L25 13.208l-3.458 3.459h-4.875v4.875L13.208 25l3.459 3.458v4.875h4.875L25 36.792l3.458-3.459h4.875v-4.875L36.792 25z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M25.104 25h-.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 6.25H8.333c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqSettingsAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
