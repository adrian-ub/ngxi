import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqVibrateIcon],svg[marketeq-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M6.25 16.667v16.666m37.5-16.666v16.666z"></svg:path><svg:path stroke="#306CFE" d="M33.333 41.667H16.667a2.083 2.083 0 0 1-2.084-2.084V10.417a2.083 2.083 0 0 1 2.084-2.084h16.666a2.083 2.083 0 0 1 2.084 2.084v29.166a2.083 2.083 0 0 1-2.084 2.084M29.167 8.333h-8.334l1.042 4.167h6.25z"></svg:path></svg:g>`,
})
export class MarketeqVibrateIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
