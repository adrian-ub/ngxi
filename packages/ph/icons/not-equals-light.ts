import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsLightIcon],svg[ph-not-equals-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 160a6 6 0 0 1-6 6H101.56l-49.12 54a6 6 0 1 1-8.88-8l41.79-46H40a6 6 0 0 1 0-12h56.25l47.28-52H40a6 6 0 0 1 0-12h114.44l49.12-54a6 6 0 1 1 8.88 8l-41.79 46H216a6 6 0 0 1 0 12h-56.25l-47.28 52H216a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhNotEqualsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
