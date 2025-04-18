import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentMultiple24FilledIcon],svg[fluent-document-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h4.254v4.748a2.25 2.25 0 0 0 2.25 2.25H17.5v8.252a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.25z"></svg:path><svg:path d="M12.004 6.748v-4.28q.115.087.218.191l4.619 4.619q.105.105.193.22h-4.28a.75.75 0 0 1-.75-.75M8.75 22a2.25 2.25 0 0 1-2.121-1.5h8.622a3.25 3.25 0 0 0 3.25-3.25V8.937l.84.84c.423.423.66.995.66 1.592v5.881A4.75 4.75 0 0 1 15.25 22z"></svg:path></svg:g>`,
})
export class FluentDocumentMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
