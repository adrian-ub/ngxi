import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableMoveUp24FilledIcon],svg[fluent-table-move-up-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 1 0 0 1.5h16.5z" fill="currentColor"></svg:path><svg:path d="M20.78 9.72c.141.14.22.331.22.53v4.25h-5v-5h4.25a.75.75 0 0 1 .53.22z" fill="currentColor"></svg:path><svg:path d="M14.5 14.5v-4.018c-.25.036-.506.018-.75-.054v.822a1.75 1.75 0 1 1-3.5 0v-.822c-.244.072-.5.09-.75.054V14.5h5z" fill="currentColor"></svg:path><svg:path d="M9.5 16h5v5h-5v-5z" fill="currentColor"></svg:path><svg:path d="M8 14.5v-5H3.75a.75.75 0 0 0-.75.75v4.25h5z" fill="currentColor"></svg:path><svg:path d="M3 16h5v5H6.25A3.25 3.25 0 0 1 3 17.75V16z" fill="currentColor"></svg:path><svg:path d="M16 16h5v1.75A3.25 3.25 0 0 1 17.75 21H16v-5z" fill="currentColor"></svg:path><svg:path d="M14.81 9.248a.75.75 0 0 1-1.058.063l-1.002-.89v2.829a.75.75 0 0 1-1.5 0V8.42l-1.002.89a.75.75 0 0 1-.996-1.12l2.25-2a.75.75 0 0 1 .996 0l2.25 2a.75.75 0 0 1 .063 1.058z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentTableMoveUp24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
