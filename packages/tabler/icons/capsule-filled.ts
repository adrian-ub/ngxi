import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCapsuleFilledIcon],svg[tabler-capsule-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l-.243.004A7.004 7.004 0 0 0 5 9v6a7 7 0 0 0 7 7l.243-.004A7.004 7.004 0 0 0 19 15V9a7 7 0 0 0-7-7"></svg:path>`,
})
export class TablerCapsuleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
