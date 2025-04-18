import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProjectionScreen20RegularIcon],svg[fluent-projection-screen-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0 0 2v6a3 3 0 0 0 3 3h3.5v2h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2H14a3 3 0 0 0 3-3V5a1 1 0 1 0 0-2zm1 2h12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path>`,
})
export class FluentProjectionScreen20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
