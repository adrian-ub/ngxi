import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeXmarkFillIcon],svg[gravity-ui-volume-xmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 11h3l2.586 2.586a1.414 1.414 0 0 0 2.414-1V3.414a1.414 1.414 0 0 0-2.414-1L4.5 5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11m10.78-5.28a.75.75 0 1 0-1.06 1.06L12.44 8l-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22l1.22 1.22a.75.75 0 1 0 1.06-1.06L14.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L13.5 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeXmarkFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
