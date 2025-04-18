import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCommentsSolidIcon],svg[stash-comments-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 8.25c-3.268 0-6 2.419-6 5.5s2.732 5.5 6 5.5a6.5 6.5 0 0 0 2.192-.378l2.616 1.09a.5.5 0 0 0 .674-.594l-.644-2.363A5.18 5.18 0 0 0 20.5 13.75c0-3.081-2.732-5.5-6-5.5"></svg:path><svg:path fill="currentColor" d="M4 9.5c0 1.186.454 2.276 1.214 3.133l-.499 1.828c-.069.253-.103.38-.07.46c.03.07.09.122.163.142c.084.024.205-.027.447-.128l2.044-.851q.105.042.215.08a6 6 0 0 1-.014-.414c0-3.692 3.221-6.457 6.913-6.5C13.508 5.62 11.648 4.5 9.5 4.5C6.462 4.5 4 6.739 4 9.5"></svg:path>`,
})
export class StashCommentsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
