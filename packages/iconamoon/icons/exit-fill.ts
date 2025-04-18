import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonExitFillIcon],svg[iconamoon-exit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 3.001a1 1 0 1 1 0 2H6v13a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2H7a3 3 0 0 1-3-3v-14a1 1 0 0 1 1-1zm1.707 5.293A1 1 0 0 0 15 9v2H9a1 1 0 1 0 0 2h6v2a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonExitFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
