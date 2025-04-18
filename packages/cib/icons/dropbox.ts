import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibDropboxIcon],svg[cib-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2.412L0 7.505l8 5.093l8-5.093zm16 0l-8 5.093l8 5.093l8-5.093zM0 17.697l8 5.1l8-5.1l-8-5.093zm24-5.093l-8 5.093l8 5.1l8-5.1zM8 24.495l8 5.093l8-5.093l-8-5.093z"></svg:path>`,
})
export class CibDropboxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
