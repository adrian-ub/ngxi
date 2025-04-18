import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBookmarkDotSolidIcon],svg[mynaui-bookmark-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 10a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M5.25 3.942c0-.766.521-1.692 1.5-1.692h10.5c.979 0 1.5.926 1.5 1.692v16.01c0 1.352-1.469 2.308-2.686 1.518l-3.944-2.56a.21.21 0 0 0-.238 0l-3.946 2.56c-1.217.79-2.686-.165-2.686-1.518zM12 7.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path></svg:g>`,
})
export class MynauiBookmarkDotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
