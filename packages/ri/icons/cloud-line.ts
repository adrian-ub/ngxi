import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCloudLineIcon],svg[ri-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 1 6.992 7.339A6 6 0 0 1 17 21H7A6 6 0 0 1 5.008 9.339A7 7 0 0 1 12 2m0 2a5 5 0 0 0-4.994 5.243l.07 1.488l-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6 6 0 0 1 17 9a5 5 0 0 0-5-5"></svg:path>`,
})
export class RiCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
