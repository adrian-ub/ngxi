import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCommentRemoveThinIcon],svg[iconamoon-comment-remove-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1m-3-8.999h6"></svg:path>`,
})
export class IconamoonCommentRemoveThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
