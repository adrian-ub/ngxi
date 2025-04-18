import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMagnetIcon],svg[icon-park-twotone-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMagnet0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10v16c0 9.941 8.059 18 18 18s18-8.059 18-18V10m-28 0v16c0 5.523 4.477 10 10 10s10-4.477 10-10V10"></svg:path><svg:path fill="#555" d="M14 4H6v6h8zm20 0h8v6h-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMagnet0)"></svg:path>`,
})
export class IconParkTwotoneMagnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
