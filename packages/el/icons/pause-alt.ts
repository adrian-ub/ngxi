import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPauseAltIcon],svg[el-pause-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M330.835 289.38h181.714v621.24H330.835zm356.616 0h181.714v621.24H687.451z"></svg:path>`,
})
export class ElPauseAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
