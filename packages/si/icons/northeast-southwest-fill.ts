import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNortheastSouthwestFillIcon],svg[si-northeast-southwest-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 5h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586L15.586 7H14a1 1 0 1 1 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SiNortheastSouthwestFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
