import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailStarLineIcon],svg[ri-mail-star-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zM19.5 21.75l-2.645 1.39l.505-2.945l-2.14-2.086l2.957-.43L19.5 15l1.323 2.68l2.957.43l-2.14 2.085l.505 2.946z"></svg:path>`,
})
export class RiMailStarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
