import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMirrorIcon],svg[tdesign-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v20h-2V2zM9 4.64V18.5H1.3zm6 0l7.7 13.86H15zM4.7 16.5H7v-4.14zM17 12.36v4.14h2.3z"></svg:path>`,
})
export class TdesignMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
