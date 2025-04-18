import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDviIcon],svg[icon-park-dvi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 16C4 14.8954 4.89543 14 6 14H42C43.1046 14 44 14.8954 44 16V23.802C44 23.9337 43.987 24.065 43.9612 24.1942L42.3216 32.3922C42.1346 33.3271 41.3138 34 40.3604 34H7.63961C6.68624 34 5.86542 33.3271 5.67845 32.3922L4.03884 24.1942C4.01301 24.065 4 23.9337 4 23.802V16Z"></svg:path><svg:path stroke="#fff" d="M10 24H16"></svg:path><svg:path stroke="#fff" d="M21 21H23"></svg:path><svg:path stroke="#fff" d="M21 27H23"></svg:path><svg:path stroke="#fff" d="M28 21H30"></svg:path><svg:path stroke="#fff" d="M28 27H30"></svg:path><svg:path stroke="#fff" d="M35 21H37"></svg:path><svg:path stroke="#fff" d="M35 27H37"></svg:path></svg:g>`,
})
export class IconParkDviIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
