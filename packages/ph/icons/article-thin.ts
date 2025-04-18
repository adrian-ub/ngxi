import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArticleThinIcon],svg[ph-article-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM180 96a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhArticleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
