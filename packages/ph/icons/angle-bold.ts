import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAngleBoldIcon],svg[ph-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 200a12 12 0 0 1-12 12H72a12 12 0 0 1-12-12V84H32a12 12 0 0 1 0-24h28V32a12 12 0 0 1 24 0v156h156a12 12 0 0 1 12 12M111 84.29a84 84 0 0 1 76.7 76.7a12 12 0 0 0 11.95 11h1a12 12 0 0 0 11-13A108 108 0 0 0 113 60.37a12 12 0 1 0-2 23.92"></svg:path>`,
})
export class PhAngleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
