import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqForest2Icon],svg[marketeq-forest-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M27.083 17.708a7.27 7.27 0 0 0-4.354-6.666a6.25 6.25 0 0 0-12.125 0a7.27 7.27 0 0 0 0 13.333a6.25 6.25 0 0 0 12.125 0a7.27 7.27 0 0 0 4.354-6.667"></svg:path><svg:path stroke="#344054" d="M16.667 18.75v25m22.916-12.5v12.5"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5m0-16.667v-6.25a4.167 4.167 0 0 0-8.333 0v6.25a4.167 4.167 0 1 0 8.333 0"></svg:path></svg:g>`,
})
export class MarketeqForest2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
