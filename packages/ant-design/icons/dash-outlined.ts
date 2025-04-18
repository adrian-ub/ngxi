import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignDashOutlinedIcon],svg[ant-design-dash-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"></svg:path>`,
})
export class AntDesignDashOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
