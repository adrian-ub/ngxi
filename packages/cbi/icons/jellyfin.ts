import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiJellyfinIcon],svg[cbi-jellyfin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C9.355 2 .835 17.448 2.134 20.055s18.45 2.578 19.735 0S14.648 2 12 2m6.469 15.793c-.84 1.69-12.077 1.708-12.928 0S10.267 5.963 12 5.963s7.311 10.137 6.469 11.83M12 9.664c-.878 0-3.7 5.125-3.275 5.991s6.124.856 6.55 0S12.88 9.664 12 9.664"></svg:path>`,
})
export class CbiJellyfinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
