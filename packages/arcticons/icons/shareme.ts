import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSharemeIcon],svg[arcticons-shareme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.4 17.33a9.43 9.43 0 1 1 6.67 16.1c-5.21 0-7.42-4.95-10.07-9.43c-2.83-4.78-4.86-9.43-10.07-9.43a9.43 9.43 0 1 0 6.6 16.16"></svg:path>`,
})
export class ArcticonsSharemeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
