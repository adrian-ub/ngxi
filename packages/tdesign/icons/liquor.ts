import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLiquorIcon],svg[tdesign-liquor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 1.086L22.914 4.5L18 9.414v4L9.414 22a2 2 0 0 1-2.828 0L2 17.414a2 2 0 0 1 0-2.828L10.586 6h4zM5 14.414L3.414 16L8 20.586L9.586 19zm10-.828l1-1v-4L20.086 4.5l-.586-.586L15.414 8h-4l-1 1zL13.586 15L9 10.414L6.414 13L11 17.586m-2.002-4.588h2.004v2.004H8.998z"></svg:path>`,
})
export class TdesignLiquorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
