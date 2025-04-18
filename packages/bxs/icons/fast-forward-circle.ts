import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsFastForwardCircleIcon],svg[bxs-fast-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10s10-4.485 10-10S17.514 2 12 2m1 14v-4l-6 4V8l6 4V8l6 4z"></svg:path>`,
})
export class BxsFastForwardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
