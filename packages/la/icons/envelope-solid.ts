import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEnvelopeSolidIcon],svg[la-envelope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8v18h26V8zm4.313 2h17.375L16 15.781zM5 10.875l10.438 6.969l.562.343l.563-.343L27 10.875V24H5z"></svg:path>`,
})
export class LaEnvelopeSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
