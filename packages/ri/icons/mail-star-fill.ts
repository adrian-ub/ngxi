import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailStarFillIcon],svg[ri-mail-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14.044A6 6 0 0 0 13.689 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-2.361L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513zM19.5 21.75l-2.645 1.39l.505-2.945l-2.14-2.086l2.957-.43L19.5 15l1.323 2.68l2.957.43l-2.14 2.085l.505 2.946z"></svg:path>`,
})
export class RiMailStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
