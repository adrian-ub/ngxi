import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGlassesLineIcon],svg[ri-glasses-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 0 1 8.192-3.848A4 4 0 0 1 12 7c1.095 0 2.086.44 2.808 1.152a5 5 0 1 1-1.264 1.578A2 2 0 0 0 12 9c-.62 0-1.177.283-1.544.73A5 5 0 1 1 1 12m17-3a2.996 2.996 0 0 0-3 3a3 3 0 1 0 3-3"></svg:path>`,
})
export class RiGlassesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
