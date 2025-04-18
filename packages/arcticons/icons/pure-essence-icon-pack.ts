import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPureEssenceIconPackIcon],svg[arcticons-pure-essence-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.588 41.193L19.28 42.5H6.5a1 1 0 0 1-1-1V28.72L28.72 5.5H41.5a1 1 0 0 1 1 1v12.78L28.104 33.678M7.126 20.907L5.5 19.28V6.5a1 1 0 0 1 1-1h12.78l1.627 1.626"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.874 27.093L42.5 28.72V41.5a1 1 0 0 1-1 1H28.72L13.311 27.093"></svg:path>`,
})
export class ArcticonsPureEssenceIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
