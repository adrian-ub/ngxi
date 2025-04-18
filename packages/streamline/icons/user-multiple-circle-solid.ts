import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserMultipleCircleSolidIcon],svg[streamline-user-multiple-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7a7 7 0 1 0-12.95 3.688A7 7 0 0 0 7 14a7 7 0 0 0 7-7m-7 5.5a5.5 5.5 0 0 0 1.582-.23c-.433-1.965-1.758-3.582-4.011-3.582c-.946 0-1.762.325-2.447.86A5.5 5.5 0 0 0 7 12.5m2.594-.649A5.5 5.5 0 0 0 11.93 9.44a3.74 3.74 0 0 0-3.665-.16q.071.078.139.16c.583.698.97 1.537 1.189 2.412ZM4.729 3.243a2.245 2.245 0 1 1 0 4.49a2.245 2.245 0 0 1 0-4.49m7.069 2.897a1.86 1.86 0 1 0-3.72 0a1.86 1.86 0 0 0 3.72 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUserMultipleCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
