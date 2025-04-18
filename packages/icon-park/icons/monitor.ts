import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMonitorIcon],svg[icon-park-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="28" x="4" y="10" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M44 14L36 20.75V27.25L44 34V14Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 19L23 24L17 29"></svg:path></svg:g>`,
})
export class IconParkMonitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
