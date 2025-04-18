import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBorderAllIcon],svg[gg-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="3" d="M6.5 6.5h11v11h-11z"></svg:path>`,
})
export class GgBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
