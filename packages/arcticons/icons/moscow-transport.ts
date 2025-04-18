import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoscowTransportIcon],svg[arcticons-moscow-transport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.163 31.663a15.326 15.326 0 1 1 21.674 0L24 42.5"></svg:path><svg:circle cx="24" cy="20.826" r="5.109" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.775 28.051a10.217 10.217 0 1 1 14.45 0L20.388 38.888"></svg:path>`,
})
export class ArcticonsMoscowTransportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
