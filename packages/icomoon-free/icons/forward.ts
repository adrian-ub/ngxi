import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeForwardIcon],svg[icomoon-free-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.096 0C2.319 3.219 2.02 8.13 9 7.966V4l6 6l-6 6v-3.881C.641 12.337-.29 4.741 4.096 0"></svg:path>`,
})
export class IcomoonFreeForwardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
