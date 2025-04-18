import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCloudPlusIcon],svg[si-glyph-cloud-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M8.916 9.941V7.937H10v-1h3.029v.969h1.033v2.031l2.947.014c-.14-1.43-1.062-2.539-2.189-2.539a1.7 1.7 0 0 0-.714.168c-.694-1.04-1.831-1.72-3.118-1.72c-.207 0-.408.022-.605.056C9.701 4.783 8.514 4.03 7.158 4.03c-1.91 0-3.49 1.497-3.779 3.451c-.018 0-.034-.006-.051-.006c-1.281 0-2.318 1.108-2.318 2.476z"></svg:path><svg:path d="M12.969 9h-1.031v-.994h-.876V9H10.01v.959h1.052v.989h.876v-.989h1.031z"></svg:path></svg:g>`,
})
export class SiGlyphCloudPlusIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
