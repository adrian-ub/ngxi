import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggTrophyIcon],svg[gg-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 15.9a5 5 0 0 0 4-4.9V4H7v7a5 5 0 0 0 4 4.9V18H9v2h6v-2h-2zM9 6h6v5a3 3 0 1 1-6 0z" clip-rule="evenodd"></svg:path><svg:path d="M18 6h2v5h-2zM6 6H4v5h2z"></svg:path></svg:g>`,
})
export class GgTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
