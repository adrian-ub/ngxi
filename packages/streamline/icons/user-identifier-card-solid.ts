import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserIdentifierCardSolidIcon],svg[streamline-user-identifier-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm6 2.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M1.547 9.302A4 4 0 0 1 4.5 8a4 4 0 0 1 2.953 1.302c.26.284.03.698-.355.698H1.902c-.385 0-.615-.414-.355-.698M8.875 5.5c0-.345.28-.625.625-.625h2a.625.625 0 0 1 0 1.25h-2a.625.625 0 0 1-.625-.625M9.5 7.875a.625.625 0 1 0 0 1.25h2a.625.625 0 0 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUserIdentifierCardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
