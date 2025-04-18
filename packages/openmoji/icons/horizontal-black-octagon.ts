import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHorizontalBlackOctagonIcon],svg[openmoji-horizontal-black-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24.662 10.569A1.94 1.94 0 0 1 26.034 10h19.932a1.94 1.94 0 0 1 1.372.569l14.094 14.093c.364.364.568.858.568 1.372v19.932a1.94 1.94 0 0 1-.568 1.372L47.338 61.432a1.94 1.94 0 0 1-1.372.568H26.034a1.94 1.94 0 0 1-1.372-.568L10.57 47.338a1.94 1.94 0 0 1-.57-1.372V26.034c0-.514.204-1.008.569-1.372z"></svg:path><svg:path fill="#3F3F3F" d="M24.662 10.569A1.94 1.94 0 0 1 26.034 10h19.932a1.94 1.94 0 0 1 1.372.569l14.094 14.093c.364.364.568.858.568 1.372v19.932a1.94 1.94 0 0 1-.568 1.372L47.338 61.432a1.94 1.94 0 0 1-1.372.568H26.034a1.94 1.94 0 0 1-1.372-.568L10.57 47.338a1.94 1.94 0 0 1-.57-1.372V26.034c0-.514.204-1.008.569-1.372z"></svg:path><svg:path fill="none" stroke="#000" stroke-width="2" d="M24.662 10.569A1.94 1.94 0 0 1 26.034 10h19.932a1.94 1.94 0 0 1 1.372.569l14.094 14.093c.364.364.568.858.568 1.372v19.932a1.94 1.94 0 0 1-.568 1.372L47.338 61.432a1.94 1.94 0 0 1-1.372.568H26.034a1.94 1.94 0 0 1-1.372-.568L10.57 47.338a1.94 1.94 0 0 1-.57-1.372V26.034c0-.514.204-1.008.569-1.372z"></svg:path>`,
})
export class OpenmojiHorizontalBlackOctagonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
