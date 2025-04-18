import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidDIcon],svg[fa6-solid-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h96c123.7 0 224 100.3 224 224S283.7 480 160 480H64c-35.3 0-64-28.7-64-64zm160 0H64v320h96c88.4 0 160-71.6 160-160S248.4 96 160 96"></svg:path>`,
})
export class Fa6SolidDIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
