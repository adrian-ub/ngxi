import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSpaceBetweenVIcon],svg[gg-space-between-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4h14V5h-2v2H7V5zm0 14v-4h14v4h-2v-2H7v2zm2-8h10v2H7z"></svg:path>`,
})
export class GgSpaceBetweenVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
