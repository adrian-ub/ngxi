import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMirrorFilledIcon],svg[tdesign-mirror-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v20h-2V2zM9 4.64V18.5H1.3zm6 0l7.7 13.86H15z"></svg:path>`,
})
export class TdesignMirrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
