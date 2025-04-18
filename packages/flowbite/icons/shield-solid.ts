import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteShieldSolidIcon],svg[flowbite-shield-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.7 17.7 0 0 0 2.022 7.98a17.4 17.4 0 0 0 5.403 6.158a1 1 0 0 0 1.15 0a17.4 17.4 0 0 0 5.402-6.157A17.7 17.7 0 0 0 20 6.68a1 1 0 0 0-.644-.949z"></svg:path>`,
})
export class FlowbiteShieldSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
