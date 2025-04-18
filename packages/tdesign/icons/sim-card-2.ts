import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCard2Icon],svg[tdesign-sim-card-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.586 1H21v22H3V5.586zm.828 2L5 6.414V21h14V3zM12 10a1 1 0 0 0-1 1v1H9v-1a3 3 0 1 1 5.149 2.094l-.028.028l-1.841 1.611H15v2H9v-1.787l3.739-3.272A1 1 0 0 0 12 10"></svg:path>`,
})
export class TdesignSimCard2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
