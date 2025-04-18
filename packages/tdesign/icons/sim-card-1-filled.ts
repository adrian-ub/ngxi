import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCard1FilledIcon],svg[tdesign-sim-card-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1H7.586L3 5.586V23h18zm-9.5 15.988v-5.982h-1v-2h3v7.982z"></svg:path>`,
})
export class TdesignSimCard1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
