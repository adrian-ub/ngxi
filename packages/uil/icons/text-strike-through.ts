import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTextStrikeThroughIcon],svg[uil-text-strike-through-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2m2-7H7a1 1 0 0 0 0 2h4v2a1 1 0 0 0 2 0V8h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilTextStrikeThroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
