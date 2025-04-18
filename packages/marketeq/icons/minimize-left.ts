import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMinimizeLeftIcon],svg[marketeq-minimize-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m8.333 8.333l12.5 12.5m20.834 20.834l-12.5-12.5z"></svg:path><svg:path stroke="#344054" d="M29.167 37.5v-8.333H37.5M20.833 12.5v8.333H12.5"></svg:path></svg:g>`,
})
export class MarketeqMinimizeLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
