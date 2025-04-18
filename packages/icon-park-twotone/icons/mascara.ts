import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMascaraIcon],svg[icon-park-twotone-mascara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMascara0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M28 16h12v28H28z"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M8 28h12v16H8z"></svg:path><svg:path stroke-linejoin="round" d="M14 4v24"></svg:path><svg:path d="M20 36H8"></svg:path><svg:path stroke-linejoin="round" d="M20 32v8M8 32v8M18 9h-8m10 6H8m10 6h-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMascara0)"></svg:path>`,
})
export class IconParkTwotoneMascaraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
