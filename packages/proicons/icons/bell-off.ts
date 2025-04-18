import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBellOffIcon],svg[proicons-bell-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 21.25h4"></svg:path><svg:path stroke-linejoin="round" d="M17.188 18.25H4.826a1 1 0 0 1-.848-1.53l1.089-1.74a3 3 0 0 0 .457-1.59V9.226c0-.788.14-1.543.398-2.242M7.62 4.458l.06-.055a6.477 6.477 0 0 1 10.798 4.825v4.161a3 3 0 0 0 .457 1.592l1.088 1.74q.068.106.104.219"></svg:path><svg:path stroke-linejoin="round" d="m20.719 21.782l-3.531-3.531L5.922 6.985L2.218 3.282"></svg:path></svg:g>`,
})
export class ProiconsBellOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
