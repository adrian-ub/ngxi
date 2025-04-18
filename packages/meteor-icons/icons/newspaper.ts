import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsNewspaperIcon],svg[meteor-icons-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6v13a2 2 0 0 0 4 0V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a3 3 0 0 1-3 3H4m7-13h6m-6 4h6m-6 4h6"></svg:path>`,
})
export class MeteorIconsNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
