import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFilterIcon],svg[marketeq-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.417 8.333v5.5c-.001.487.168.959.479 1.334L20.354 26.5c.31.375.48.847.48 1.333V43.75l8.333-4.167v-11.75a2.08 2.08 0 0 1 .479-1.333l9.458-11.333c.31-.375.48-.847.48-1.334v-5.5A2.083 2.083 0 0 0 37.5 6.25h-25a2.083 2.083 0 0 0-2.083 2.083"></svg:path>`,
})
export class MarketeqFilterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
