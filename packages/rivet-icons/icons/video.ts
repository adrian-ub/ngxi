import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsVideoIcon],svg[rivet-icons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h12v2.367l4-.5v8.266l-4-.5V14H0zm2 2v8h8V9.367l4 .5V6.133l-4 .5V4z"></svg:path>`,
})
export class RivetIconsVideoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
