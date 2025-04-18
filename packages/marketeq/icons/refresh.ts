import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqRefreshIcon],svg[marketeq-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M12.5 12.5H8.333a2.083 2.083 0 0 0-2.083 2.083v20.834A2.083 2.083 0 0 0 8.333 37.5h20.834m8.333 0h4.167a2.083 2.083 0 0 0 2.083-2.083V14.583a2.083 2.083 0 0 0-2.083-2.083H20.833"></svg:path><svg:path stroke="#344054" d="m25 33.333l4.167 4.167L25 41.667m0-25L20.833 12.5L25 8.333"></svg:path></svg:g>`,
})
export class MarketeqRefreshIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
