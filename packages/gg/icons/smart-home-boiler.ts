import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeBoilerIcon],svg[gg-smart-home-boiler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v16h-3.856l.742 2h-2l-.742-2h-2l.742 2h-2l-.742-2H5zm4-2h6a2 2 0 0 1 2 2v2H7V5a2 2 0 0 1 2-2M7 9h10v10H7z" clip-rule="evenodd"></svg:path>`,
})
export class GgSmartHomeBoilerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
