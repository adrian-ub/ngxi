import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCommentsOutlineIcon],svg[lsicon-comments-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M1.5 2.5h13v9h-8l-3 2v-2h-2z"></svg:path><svg:path d="M4.5 6.75a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm4 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm4 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path></svg:g>`,
})
export class LsiconCommentsOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
