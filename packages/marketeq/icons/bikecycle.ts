import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBikecycleIcon],svg[marketeq-bikecycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.417 16.667H31.77a22.02 22.02 0 0 0-21.354 16.666v0"></svg:path><svg:path stroke="#344054" d="M6.25 37.5a4.167 4.167 0 1 0 8.333 0a4.167 4.167 0 0 0-8.333 0m20.833-4.167a8.333 8.333 0 1 0 16.667 0a8.333 8.333 0 0 0-16.667 0"></svg:path><svg:path stroke="#306CFE" d="M18.75 20.833v-4.166a2.083 2.083 0 0 0-2.083-2.084h-2.084m20.834 18.75V10.417a2.083 2.083 0 0 0-2.084-2.084h-4.166"></svg:path></svg:g>`,
})
export class MarketeqBikecycleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
