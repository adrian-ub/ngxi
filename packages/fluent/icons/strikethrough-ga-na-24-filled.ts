import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStrikethroughGaNa24FilledIcon],svg[fluent-strikethrough-ga-na-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M9 20.25V13.5H6.837c-.82 1.332-2.155 2.421-4.183 2.738a1 1 0 1 1-.308-1.976c.77-.12 1.377-.392 1.858-.762H1.75a1 1 0 1 1 0-2h20.5a1 1 0 1 1 0 2H22v7a1 1 0 1 1-2 0v-7h-4.745l-.135 1.352l2.756-.344a1 1 0 0 1 .248 1.984l-4 .5a1 1 0 0 1-1.119-1.092l.24-2.4H11v6.75a1 1 0 1 1-2 0zm13-9.75V5a1 1 0 1 0-2 0v5.5h2zm-6.445 0l.44-4.4a1 1 0 1 0-1.99-.2l-.46 4.6h2.01zM11 10.5V4.75a1 1 0 1 0-2 0v5.75h2zm-3.113 0C7.967 9.969 8 9.46 8 9a1 1 0 0 0-1-1H2.5a1 1 0 1 0 0 2h3.438c-.021.165-.047.333-.08.5h2.03z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentStrikethroughGaNa24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
