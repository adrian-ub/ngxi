import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSignpostIcon],svg[charm-signpost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 9.25h10.5l2-2.25l-2-2.25H1.75zm5.5.5v4.5m0-12.5v2.5"></svg:path>`,
})
export class CharmSignpostIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
