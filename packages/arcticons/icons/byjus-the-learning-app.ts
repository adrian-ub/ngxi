import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsByjusTheLearningAppIcon],svg[arcticons-byjus-the-learning-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.838 27.235c-1.123-4.19-4.767-7.022-8.862-7.324a8.16 8.16 0 0 0 2.797-8.494a8.16 8.16 0 0 0-9.925-5.787l-.032-.118l-11.77 3.154a3 3 0 0 0-2.122 3.674l7.52 28.067a3 3 0 0 0 3.675 2.121l11.77-3.154v-.003c5.252-1.45 8.362-6.864 6.95-12.136Z"></svg:path>`,
})
export class ArcticonsByjusTheLearningAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
