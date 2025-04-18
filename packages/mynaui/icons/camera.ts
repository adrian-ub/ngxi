import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCameraIcon],svg[mynaui-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.52 20.414c.308-.375.48-.884.48-1.414V7c0-.53-.172-1.04-.48-1.414C20.215 5.21 19.799 5 19.365 5h-8.981C8.659 5 8.325 3.269 6.827 3.026C6.563 2.983 6.289 3 6.022 3c-.953 0-1.429 0-1.804.159a2 2 0 0 0-1.059 1.06C3 4.592 3 5.068 3 6.021V19c0 .53.172 1.04.48 1.414c.306.375.722.586 1.156.586h14.728c.434 0 .85-.21 1.157-.586M16 3h3"></svg:path><svg:path d="M13.5 17a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class MynauiCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
