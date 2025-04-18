import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCard2FilledIcon],svg[tdesign-sim-card-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H7.586L3 5.586V23h18zM11 11v1H9v-1a3 3 0 1 1 5.149 2.094l-.028.028l-1.841 1.611H15v2H9v-1.787l3.739-3.272A1 1 0 1 0 11 11"></svg:path>`,
})
export class TdesignSimCard2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
