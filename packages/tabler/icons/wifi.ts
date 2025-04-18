import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWifiIcon],svg[tabler-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0"></svg:path><svg:path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0"></svg:path></svg:g>`,
})
export class TablerWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
