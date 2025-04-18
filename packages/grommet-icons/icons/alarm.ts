import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAlarmIcon],svg[grommet-icons-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M21 13a9 9 0 0 1-9 9a9 9 0 0 1-9-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9ZM5.5 19.5L2 23zm13 0L22 23zM9 4c-.71-1.092-2.118-2-4-2c-2.1 0-4 1.9-4 4c0 1.882.908 3.29 2 4m18 0c1.092-.71 2-2.118 2-4c0-2.1-1.9-4-4-4c-1.882 0-3.29.908-4 2m-3 4v5l3 3"></svg:path>`,
})
export class GrommetIconsAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
