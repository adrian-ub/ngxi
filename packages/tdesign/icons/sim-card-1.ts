import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCard1Icon],svg[tdesign-sim-card-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.586 1H21v22H3V5.586zm.828 2L5 6.414V21h14V3zM10.5 9.006h3v7.982h-2v-5.982h-1z"></svg:path>`,
})
export class TdesignSimCard1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
