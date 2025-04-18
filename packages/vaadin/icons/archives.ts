import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinArchivesIcon],svg[vaadin-archives-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H5v4h6zM9 4H7V3h2z"></svg:path><svg:path fill="currentColor" d="M3 0v16h2v-1h6v1h2V0zm9 14H4V8h8zm0-7H4V1h8z"></svg:path><svg:path fill="currentColor" d="M11 9H5v4h6zm-2 2H7v-1h2z"></svg:path>`,
})
export class VaadinArchivesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
