import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageUserCheckIcon],svg[mage-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.359 14.724c-3.6 0-7.62 2.928-7.62 6.526m7.62-9.785a4.36 4.36 0 0 0 4.035-2.683a4.355 4.355 0 0 0-3.171-5.948a4.362 4.362 0 0 0-5.215 4.274a4.356 4.356 0 0 0 4.35 4.357m.904 6.897l1.688 1.689a.637.637 0 0 0 .909 0l3.403-3.403"></svg:path>`,
})
export class MageUserCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
