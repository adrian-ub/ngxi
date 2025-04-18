import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPachliIcon],svg[arcticons-pachli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.216 4.5h8.008v39h-8.008zm16.7 21.734c6.002 0 10.868-4.865 10.868-10.867S32.918 4.5 26.916 4.5h-8.691v21.734zm2.757-.385V4.886"></svg:path>`,
})
export class ArcticonsPachliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
