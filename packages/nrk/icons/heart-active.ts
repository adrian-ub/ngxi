import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHeartActiveIcon],svg[nrk-heart-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-1l-9-8V6l3-4h4l3 3l3-3h4l3 4v7l-9 8z"></svg:path>`,
})
export class NrkHeartActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
