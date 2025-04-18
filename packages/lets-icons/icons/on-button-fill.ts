import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsOnButtonFillIcon],svg[lets-icons-on-button-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m3.536 2.05a1 1 0 0 1 1.414 0a7 7 0 1 1-9.9 0a1 1 0 0 1 1.414 1.414a5 5 0 1 0 7.072 0a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsOnButtonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
