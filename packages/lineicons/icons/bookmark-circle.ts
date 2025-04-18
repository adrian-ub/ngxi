import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBookmarkCircleIcon],svg[lineicons-bookmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.72 6.857a2.25 2.25 0 0 0-2.25 2.25v7.75a.75.75 0 0 0 1.174.619l2.432-1.668a.75.75 0 0 1 .848 0l2.432 1.668a.75.75 0 0 0 1.174-.619v-7.75a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h3.56a.75.75 0 0 1 .75.75v6.326l-1.257-.862a2.25 2.25 0 0 0-2.546 0l-1.257.862z"></svg:path><svg:path d="M12.5 2.232c-5.523 0-10 4.478-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"></svg:path></svg:g>`,
})
export class LineiconsBookmarkCircleIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
