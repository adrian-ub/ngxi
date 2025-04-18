import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMediaEjectIcon],svg[charm-media-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 11.25h10.5L8 2.75zm10.5 3H2.75"></svg:path>`,
})
export class CharmMediaEjectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
