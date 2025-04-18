import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSkull2FillIcon],svg[ri-skull-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 0 1-1.106 1.789L18 19v1a3 3 0 0 1-2.824 2.995L14.95 23q.033-.161.044-.33L15 22.5V22a2 2 0 0 0-1.85-1.994L13 20h-2a2 2 0 0 0-1.995 1.85L9 22v.5q0 .258.05.5H9a3 3 0 0 1-3-3v-1l-2.894-1.447A2 2 0 0 1 2 15.763V12C2 6.477 6.477 2 12 2m-4 9a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiSkull2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
