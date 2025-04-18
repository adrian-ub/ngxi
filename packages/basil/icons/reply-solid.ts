import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilReplySolidIcon],svg[basil-reply-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.446 16.06a.5.5 0 0 1-.655.68l-2.5-1.153a14.4 14.4 0 0 0-6.681-1.309a61 61 0 0 1-.121 2.204l-.069.938a.754.754 0 0 1-1.158.581a19.6 19.6 0 0 1-5.351-5.068l-.46-.64a.5.5 0 0 1 0-.584l.46-.64A19.6 19.6 0 0 1 9.262 6a.754.754 0 0 1 1.158.58l.069.94q.069.945.108 1.89h.644a9.5 9.5 0 0 1 8.475 5.209z"></svg:path>`,
})
export class BasilReplySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
