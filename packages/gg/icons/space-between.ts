import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSpaceBetweenIcon],svg[gg-space-between-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-4v14h4v-2h-2V7h2zM5 5h4v14H5v-2h2V7H5zm8 2v10h-2V7z"></svg:path>`,
})
export class GgSpaceBetweenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
