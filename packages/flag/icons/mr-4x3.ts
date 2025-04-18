import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMr4x3Icon],svg[flag-mr-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#cd2a3e" d="M0 0h640v480H0z"></svg:path><svg:path fill="#006233" d="M0 72h640v336H0z"></svg:path><svg:path fill="#ffc400" d="M470 154.6a150 150 0 0 1-300 0a155 155 0 0 0-5 39.2a155 155 0 1 0 310 0a154 154 0 0 0-5-39.2" class="mr-st1"></svg:path><svg:path fill="#ffc400" d="m320 93.8l-13.5 41.5H263l35.3 25.6l-13.5 41.4l35.3-25.6l35.3 25.6l-13.5-41.4l35.3-25.6h-43.6z"></svg:path>`,
})
export class FlagMr4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
