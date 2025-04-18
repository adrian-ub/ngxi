import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidUsersIcon],svg[heroicons-solid-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m8 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-4.07 11q.07-.49.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1zM6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5"></svg:path>`,
})
export class HeroiconsSolidUsersIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
