import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBanSolidIcon],svg[mynaui-ban-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.75a8.25 8.25 0 0 0-6.34 13.53L17.28 5.66A8.22 8.22 0 0 0 12 3.75M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"></svg:path>`,
})
export class MynauiBanSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
