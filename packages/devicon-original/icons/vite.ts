import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalViteIcon],svg[devicon-original-vite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#006bff" d="M128 3.83L48.72 22.547L36.977 124.17ZM39.464 24.264L0 33.167l35.658 90.604Z"></svg:path>`,
})
export class DeviconOriginalViteIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
