import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceProjectionRoomIcon],svg[guidance-projection-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 20.5h5.5M5 15v-5h-.557a3 3 0 0 0-2.938 2.392L.5 17.25v.25h5m1.5 3h5.5M12 15v-5h-.557a3 3 0 0 0-2.938 2.392L7.5 17.25v.25H14v.5c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5m-2-9h9v-.25S23 12 23 7.5s.5-6.75.5-6.75V.5h-19V3m.382 5.249S3.623 7.436 3.623 6.42C3.623 5.636 4.239 5 5 5c.76 0 1.374.636 1.374 1.421c0 1.015-1.256 1.828-1.256 1.828zm7 0s-1.26-.813-1.26-1.828C10.623 5.636 11.24 5 12 5s1.374.636 1.374 1.421c0 1.015-1.256 1.828-1.256 1.828z"></svg:path>`,
})
export class GuidanceProjectionRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
