import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqScanAltIcon],svg[marketeq-scan-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 29.167v-8.334M25 33.333V16.667zm-8.333-4.166v-8.334z"></svg:path><svg:path stroke="#306CFE" d="M16.667 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083v-8.334M33.333 43.75h8.334a2.083 2.083 0 0 0 2.083-2.083v-8.334"></svg:path><svg:path stroke="#306CFE" d="M6.25 33.333v8.334a2.083 2.083 0 0 0 2.083 2.083h8.334M6.25 16.667V8.333A2.083 2.083 0 0 1 8.333 6.25h8.334M43.75 16.667V8.333a2.083 2.083 0 0 0-2.083-2.083h-8.334"></svg:path></svg:g>`,
})
export class MarketeqScanAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
