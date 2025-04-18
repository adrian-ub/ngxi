import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLockOffFillIcon],svg[iconamoon-lock-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 7a3 3 0 0 1 5.906-.75a1 1 0 0 0 1.936-.5A5.002 5.002 0 0 0 7 7v2H5a1 1 0 0 0-1 1v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-9a1 1 0 0 0-1-1H9zm4 8.5a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5h-.01a1.5 1.5 0 0 1-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonLockOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
