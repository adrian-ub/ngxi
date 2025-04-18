import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBusIcon],svg[icon-park-twotone-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBus0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M6.012 34.005V8.036a2 2 0 0 1 2-2H40a2 2 0 0 1 2 2v25.969a3 3 0 0 1-3 3h-1.995V38a4 4 0 1 1-8 0v-.995h-9.997v.997a3.998 3.998 0 0 1-7.997 0v-.997H9.012a3 3 0 0 1-3-3Z"></svg:path><svg:path stroke-linecap="round" d="M42 23H6"></svg:path><svg:path fill="#555" stroke-linecap="round" d="M34 13H14v10h20z"></svg:path><svg:path stroke-linecap="round" d="M14 30h2m16 0h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBus0)"></svg:path>`,
})
export class IconParkTwotoneBusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
