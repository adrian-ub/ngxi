import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailReadMultiple32FilledIcon],svg[fluent-mail-read-multiple-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.004 3.132a1 1 0 0 1 .992 0l9.492 5.424q.247.142.46.322L14.5 14.848L4.053 8.878a3 3 0 0 1 .459-.322zm11.945 7.478q.051.27.051.55v8.34a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5v-8.34a3 3 0 0 1 .051-.55l10.953 6.258a1 1 0 0 0 .992 0zM7.256 25.495a4.5 4.5 0 0 0 3.746 2.005h11.5a7 7 0 0 0 7-7v-7.34a3 3 0 0 0-1.512-2.604l-.49-.28v2.844l.002.04v7.34a5 5 0 0 1-5 5H7.5q-.123 0-.245-.005"></svg:path>`,
})
export class FluentMailReadMultiple32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
