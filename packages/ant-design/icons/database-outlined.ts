import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignDatabaseOutlinedIcon],svg[ant-design-database-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32m-600 72h560v208H232zm560 480H232V408h560zm0 272H232V680h560zM304 240a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0 272a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0 272a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignDatabaseOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
