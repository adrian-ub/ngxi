import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRobotFaceIcon],svg[tabler-robot-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"></svg:path><svg:path d="M9 16q1.5 1 3 1c1.5 0 2-.333 3-1M9 7L8 3m7 4l1-4m-7 9v-1m6 1v-1"></svg:path></svg:g>`,
})
export class TablerRobotFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
