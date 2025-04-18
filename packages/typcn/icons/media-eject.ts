import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMediaEjectIcon],svg[typcn-media-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16H7a2 2 0 0 0 0 4h10a2 2 0 0 0 0-4m1.433-5.396L12 4l-6.433 6.604A2 2 0 0 0 7 14h10a2 2 0 0 0 1.433-3.396"></svg:path>`,
})
export class TypcnMediaEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
