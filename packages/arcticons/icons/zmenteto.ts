import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZmentetoIcon],svg[arcticons-zmenteto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.612 14.73a9.112 9.112 0 1 0 0 18.224a9.112 9.112 0 0 0 0-18.223"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.969 24.158a9.112 9.112 0 1 1-18.224 0m18.224-.507h-2.531l2.53-4.556l2.532 4.556z"></svg:path>`,
})
export class ArcticonsZmentetoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
