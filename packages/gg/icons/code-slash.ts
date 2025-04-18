import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCodeSlashIcon],svg[gg-code-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.325 3.05L8.667 20.432l1.932.518l4.658-17.382zM7.612 18.36l1.36-1.448l-.001-.019l-5.094-4.78l4.79-5.105l-1.458-1.369l-6.16 6.563zm8.776 0l-1.36-1.448l.001-.019l5.094-4.78l-4.79-5.105l1.458-1.369l6.16 6.563z"></svg:path>`,
})
export class GgCodeSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
