import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHuntingGearIcon],svg[icon-park-twotone-hunting-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHuntingGear0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M44 29H4v13h40z"></svg:path><svg:path stroke-linejoin="round" d="M4 29L9.038 4.999H39.02l4.98 24"></svg:path><svg:path stroke-linecap="round" d="M19 12a5 5 0 0 0 0 10m10 0a5 5 0 0 0 0-10m-9 5h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHuntingGear0)"></svg:path>`,
})
export class IconParkTwotoneHuntingGearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
