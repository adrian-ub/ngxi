import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignDatabaseTwotoneIcon],svg[ant-design-database-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M232 616h560V408H232zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40M232 888h560V680H232zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40M232 344h560V136H232zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"></svg:path><svg:path fill="currentColor" d="M304 512a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0 272a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0-544a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path><svg:path fill="currentColor" d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32m-40 824H232V680h560zm0-272H232V408h560zm0-272H232V136h560z"></svg:path>`,
})
export class AntDesignDatabaseTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
