import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToolbox32RegularIcon],svg[fluent-toolbox-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 3A3.25 3.25 0 0 0 9 6.25V8H5.25A3.25 3.25 0 0 0 2 11.25v13.5A3.25 3.25 0 0 0 5.25 28h21.5A3.25 3.25 0 0 0 30 24.75v-13.5A3.25 3.25 0 0 0 26.75 8H23V6.25A3.25 3.25 0 0 0 19.75 3zM28 15h-5v-1a1 1 0 1 0-2 0v1H11v-1a1 1 0 1 0-2 0v1H4v-3.75c0-.69.56-1.25 1.25-1.25h21.5c.69 0 1.25.56 1.25 1.25zm-5 2h5v7.75c0 .69-.56 1.25-1.25 1.25H5.25C4.56 26 4 25.44 4 24.75V17h5v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0zm-2-9H11V6.25c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25z"></svg:path>`,
})
export class FluentToolbox32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
