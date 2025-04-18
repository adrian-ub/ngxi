import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggDollarIcon],svg[gg-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 19v3h2v-3h1a4 4 0 0 0 0-8h-1V7h2v2h2V5h-4V2h-2v3h-1a4 4 0 1 0 0 8h1v4H9v-2H7v4zm2-2h1a2 2 0 1 0 0-4h-1zm-2-6V7h-1a2 2 0 1 0 0 4z" clip-rule="evenodd"></svg:path>`,
})
export class GgDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
