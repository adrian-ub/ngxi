import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVideoCameraOffIcon],svg[tdesign-video-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1.586L22.414 21L21 22.414l-4-4V20H0V4h2.586l-1-1zM4.586 6H2v12h13v-1.586zm2.996-2H17v4.433l7-4.2V16l.003 3.416L22 17.415V7.766l-5 3l.004 2.655L15 11.415V6.001l-5.413.001z"></svg:path>`,
})
export class TdesignVideoCameraOffIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
