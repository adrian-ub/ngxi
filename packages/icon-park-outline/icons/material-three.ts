import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMaterialThreeIcon],svg[icon-park-outline-material-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 15V9.564c0-.892.087-1.215.25-1.54c.164-.327.404-.583.71-.757S10.567 7 11.403 7h25.192c.836 0 1.14.093 1.445.267s.545.43.709.756s.25.65.25 1.54V15"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M5 15h38v26H5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 26a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5.57 40.39L15 30l5 4l6-7l16.394 13.39"></svg:path></svg:g>`,
})
export class IconParkOutlineMaterialThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
