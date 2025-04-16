import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPoetryIcon],svg[simple-icons-poetry-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.604 0a19.14 19.14 0 0 1-5.268 13.213L2.396 0l13.583 13.583a19.15 19.15 0 0 1-13.583 5.624V0zm-1.911 17.297A24.46 24.46 0 0 1 7.189 24l-4.053-4.053a19.9 19.9 0 0 0 13.37-5.838z"></svg:path>`,
})
export class SimpleIconsPoetryIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
