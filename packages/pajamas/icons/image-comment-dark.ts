import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasImageCommentDarkIcon],svg[pajamas-image-comment-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m2-5H5l-1 1V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m0-1.5H5.5V7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path>`,
})
export class PajamasImageCommentDarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
