import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWindowseightIcon],svg[whh-windowseight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478 922V546h546v478zm0-819L1024 0v478H478zm-68 375H0V205l410-90zm0 431L0 819V546h410z"></svg:path>`,
})
export class WhhWindowseightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
