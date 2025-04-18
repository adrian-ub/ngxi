import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusObeliskIcon],svg[nimbus-obelisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 12.25h-.37L11 2.87a1.2 1.2 0 0 0-.38-.78L8.87.35a1.25 1.25 0 0 0-1.74 0L5.34 2.09a1.2 1.2 0 0 0-.34.78l-.84 9.38h-.41A1.26 1.26 0 0 0 2.5 13.5V16h11v-2.5a1.26 1.26 0 0 0-1.25-1.25M6.2 3L8 1.25L9.8 3l.83 9.27H5.37zm6.05 11.77h-8.5V13.5h8.5z"></svg:path><svg:circle cx="8.02" cy="4.04" r=".62" fill="currentColor"></svg:circle>`,
})
export class NimbusObeliskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
