import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNormaliseIcon],svg[file-icons-normalise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 0l256 256l-256 256L0 256zm-76.215 135.702v108.032L64.98 258.764l150.58 19.713V237.64l116.662 138.65V268.259l114.813-15.024l-150.58-19.712v40.814z"></svg:path>`,
})
export class FileIconsNormaliseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
