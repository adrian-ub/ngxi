import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEquipmentOutlineIcon],svg[lsicon-equipment-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8 13H3.5V2.5h9V4M11 12h1M2 13.5h6m1.5-8h4v8h-4z"></svg:path>`,
})
export class LsiconEquipmentOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
