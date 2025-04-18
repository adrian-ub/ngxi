import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLightningTrioIcon],svg[game-icons-lightning-trio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m292.53 20.5l19 40.594L66.314 28.75L362.03 158.125l-18.967-40.594l149.218 15.282zm-252 23.375L318.314 413.97L312.906 348l184.97 146.5L294 186.656l5.406 65.97zM20.907 76.22l36.5 316.405L83.03 351.75l68.095 139.344l-9.594-241.125l-25.624 40.843l-95-214.594z"></svg:path>`,
})
export class GameIconsLightningTrioIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
