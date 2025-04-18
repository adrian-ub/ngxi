import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsNumberedList16SolidIcon],svg[heroicons-numbered-list-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.995 1a.625.625 0 1 0 0 1.25h.38v2.125a.625.625 0 1 0 1.25 0v-2.75A.625.625 0 0 0 4 1zm.213 6.385a2.4 2.4 0 0 1 1.027-.124L2.573 8.923a.625.625 0 0 0 .439 1.067l1.987.011a.625.625 0 0 0 .006-1.25l-.49-.003l.777-.776c.215-.215.335-.506.335-.809c0-.465-.297-.957-.842-1.078a3.64 3.64 0 0 0-1.993.121a.625.625 0 1 0 .416 1.179M2.625 11a.625.625 0 1 0 0 1.25H4.25a.125.125 0 0 1 0 .25H3.5a.625.625 0 1 0 0 1.25h.75a.125.125 0 0 1 0 .25H2.625a.625.625 0 1 0 0 1.25H4.25a1.375 1.375 0 0 0 1.153-2.125A1.375 1.375 0 0 0 4.25 11zM7.25 2a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm-.75 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class HeroiconsNumberedList16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
