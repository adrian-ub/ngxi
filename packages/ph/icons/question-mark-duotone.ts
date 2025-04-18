import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phQuestionMarkDuotoneIcon],svg[ph-question-mark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M192 96c0 28.51-24.47 52.11-56 55.56V160a8 8 0 0 1-16 0v-16a8 8 0 0 1 8-8c26.47 0 48-17.94 48-40s-21.53-40-48-40s-48 17.94-48 40a8 8 0 0 1-16 0c0-30.88 28.71-56 64-56s64 25.12 64 56m-64 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path></svg:g>`,
})
export class PhQuestionMarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
