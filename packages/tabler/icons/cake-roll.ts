import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCakeRollIcon],svg[tabler-cake-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 15c-4.97 0-9-2.462-9-5.5S7.03 4 12 4s9 2.462 9 5.5s-4.03 5.5-9 5.5"></svg:path><svg:path d="M12 6.97c3 0 4 1.036 4 1.979c0 2.805-8 2.969-8-.99C8 5.849 9.5 4 12 4"></svg:path><svg:path d="M21 9.333v5.334C21 17.612 16.97 20 12 20s-9-2.388-9-5.333V9.333"></svg:path></svg:g>`,
})
export class TablerCakeRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
