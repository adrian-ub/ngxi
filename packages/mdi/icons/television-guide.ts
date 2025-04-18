import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionGuideIcon],svg[mdi-television-guide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17V5H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5v2H8v-2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 7h6v4H5zm0 6h6v2H5zm8-6h6v2h-6zm0 4h6v4h-6z"></svg:path>`,
})
export class MdiTelevisionGuideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
