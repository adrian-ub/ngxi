import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMinimizeIcon],svg[marketeq-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="m41.667 8.333l-12.5 12.5M8.333 41.667l12.5-12.5z"></svg:path><svg:path stroke="#344054" d="M12.5 29.167h8.333V37.5M37.5 20.833h-8.333V12.5"></svg:path></svg:g>`,
})
export class MarketeqMinimizeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
