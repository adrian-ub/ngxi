import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashFootballSolidIcon],svg[stash-football-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.6 3.46a13.08 13.08 0 0 0-9.14 9.14a.75.75 0 0 1 .52.22l7.2 7.2a.75.75 0 0 1 .22.52a13.08 13.08 0 0 0 9.14-9.14a.75.75 0 0 1-.52-.22l-7.2-7.2a.75.75 0 0 1-.22-.52m8.256 6.435a13.2 13.2 0 0 0-.027-4.06a3.22 3.22 0 0 0-2.663-2.664a13.1 13.1 0 0 0-4.061-.027zM9.896 20.856l-6.752-6.751a13.2 13.2 0 0 0 .027 4.06a3.22 3.22 0 0 0 2.664 2.664a13.2 13.2 0 0 0 4.06.027M13.65 8.4a.75.75 0 0 0-1.5 0v1.95H11.1a.75.75 0 0 0-.75.75v1.05H8.4a.75.75 0 0 0 0 1.5h1.95v1.95a.75.75 0 0 0 1.5 0v-1.95h1.05a.75.75 0 0 0 .75-.75v-1.05h1.95a.75.75 0 0 0 0-1.5h-1.95zm-1.8 3.45h.3v.3h-.3z" clip-rule="evenodd"></svg:path>`,
})
export class StashFootballSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
