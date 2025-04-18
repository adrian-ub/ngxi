import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBoldNIcon],svg[ooui-bold-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h-4L5 5v14H2V1h5l8 13c-.02-.84 0-1 0-2V1h3z"></svg:path>`,
})
export class OouiBoldNIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
