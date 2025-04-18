import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWaveSineIcon],svg[ph-wave-sine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239.24 131.4c-22 46.8-41.4 68.6-61.2 68.6c-25.1 0-40.73-33.32-57.28-68.6C107.7 103.56 92.9 72 78 72c-16.4 0-36.31 37.21-46.72 59.4a8 8 0 0 1-14.48-6.8C38.71 77.8 58.16 56 78 56c25.1 0 40.73 33.32 57.28 68.6C148.3 152.44 163.1 184 178 184c16.4 0 36.31-37.21 46.72-59.4a8 8 0 0 1 14.48 6.8Z"></svg:path>`,
})
export class PhWaveSineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
