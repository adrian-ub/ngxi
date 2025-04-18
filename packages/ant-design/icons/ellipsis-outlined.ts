import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignEllipsisOutlinedIcon],svg[ant-design-ellipsis-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 511a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0m280 0a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></svg:path>`,
})
export class AntDesignEllipsisOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
