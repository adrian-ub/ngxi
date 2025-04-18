import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSubdirectoryLeftIcon],svg[bx-subdirectory-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13h-6v-3l-5 4l5 4v-3h7a1 1 0 0 0 1-1V5h-2z"></svg:path>`,
})
export class BxSubdirectoryLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
