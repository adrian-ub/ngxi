import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam3Icon],svg[tdesign-dam-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.064 9h13.872C18.45 5.255 15.25 3 12 3S5.55 5.255 5.064 9M19 11h-2v9h2zm2 9h1v2h-8v-2h1v-9H9v9h1v2H2v-2h1V10c0-5.6 4.529-9 9-9s9 3.4 9 9zM7 11H5v9h2zm3-6h4v2h-4z"></svg:path>`,
})
export class TdesignDam3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
