import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinUploadAltIcon],svg[vaadin-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14h16v2H0zM8 0L3 5h3v8h4V5h3z"></svg:path>`,
})
export class VaadinUploadAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
