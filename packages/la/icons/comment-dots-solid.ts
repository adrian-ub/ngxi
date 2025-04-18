import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCommentDotsSolidIcon],svg[la-comment-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v18h5v5.078L14.352 23H29V5zm2 2h22v14H13.648L10 23.918V21H5zm5 5a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m6 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaCommentDotsSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
