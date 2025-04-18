import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCommentUnresolvedIcon],svg[codicon-comment-unresolved-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.5 2h13l.5.5v6.854a4 4 0 0 0-1-.819V3H2v8h2.5l.5.5v1.793l2.146-2.147L7.5 11h.626q-.124.481-.126 1h-.293l-2.853 2.854L4 14.5V12H1.5l-.5-.5v-9z" clip-rule="evenodd"></svg:path><svg:path d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class CodiconCommentUnresolvedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
