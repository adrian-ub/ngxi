import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPeoplesTwoIcon],svg[icon-park-solid-peoples-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path><svg:path d="M12 7.255A6.99 6.99 0 0 0 9 13a7 7 0 0 0 3.392 6M36 7.255A6.99 6.99 0 0 1 39 13a6.99 6.99 0 0 1-3 5.746"></svg:path><svg:path fill="currentColor" d="M12 40v2h24v-2c0-3.727 0-5.591-.609-7.062a8 8 0 0 0-4.33-4.329C29.592 28 27.728 28 24 28s-5.591 0-7.061.609a8 8 0 0 0-4.33 4.33C12 34.409 12 36.273 12 40"></svg:path><svg:path d="M44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496M4 42v-1.2c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496"></svg:path></svg:g>`,
})
export class IconParkSolidPeoplesTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
