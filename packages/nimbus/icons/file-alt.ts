import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusFileAltIcon],svg[nimbus-file-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.13 4.13L9.37.37A1.26 1.26 0 0 0 8.48 0H3.75A1.25 1.25 0 0 0 2.5 1.25v13.5A1.25 1.25 0 0 0 3.75 16h8.5a1.25 1.25 0 0 0 1.25-1.25V5a1.26 1.26 0 0 0-.37-.87m-.88 10.62h-8.5V1.25h3.48V5a1.25 1.25 0 0 0 1.25 1.27h3.77zm0-9.73H8.48V1.25L12.25 5z"></svg:path><svg:path fill="currentColor" d="M5 7.5h6v1.25H5zM5 10h6v1.25H5z"></svg:path>`,
})
export class NimbusFileAltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
