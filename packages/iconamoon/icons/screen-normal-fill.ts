import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonScreenNormalFillIcon],svg[iconamoon-screen-normal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 4.5a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1h-2a1 1 0 0 0 0 2h2a3 3 0 0 0 3-3zm5 15a1 1 0 1 0 2 0v-2a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2h-2a3 3 0 0 0-3 3zm6-11a1 1 0 0 1-1 1h-2a3 3 0 0 1-3-3v-2a1 1 0 1 1 2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1m-16 6a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v2a1 1 0 1 0 2 0v-2a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonScreenNormalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
