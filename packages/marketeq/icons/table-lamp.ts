import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTableLampIcon],svg[marketeq-table-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 31.25v12.5m-6.25 0h12.5z"></svg:path><svg:path stroke="#344054" d="M37.5 31.25L34.188 8.042a2.084 2.084 0 0 0-2.084-1.792H17.875a2.08 2.08 0 0 0-2.083 1.792L12.5 31.25z"></svg:path></svg:g>`,
})
export class MarketeqTableLampIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
