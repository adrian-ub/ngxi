import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLemon2FilledIcon],svg[tabler-lemon-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a3 3 0 0 1 2.443 4.742l-.06.076l.037.087c1.269 3.187.428 7.084-2.203 9.872L18 18c-2.8 2.8-6.823 3.723-10.095 2.42l-.087-.036l-.133.098a3 3 0 0 1-2.11.488l-.205-.036a3 3 0 0 1-1.852-4.62l.098-.134l-.036-.085c-1.269-3.187-.428-7.084 2.203-9.872L6 6c2.8-2.8 6.823-3.723 10.095-2.42l.085.037l.124-.091a3 3 0 0 1 1.493-.52z"></svg:path>`,
})
export class TablerLemon2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
