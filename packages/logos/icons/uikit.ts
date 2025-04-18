import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosUikitIcon],svg[logos-uikit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2396F3" d="M174.656 28.438L125.717 0L74.646 31.723l49.621 27.414zm23.403 12.245L147.52 71.424l57.28 33.109V192l-77.248 43.904L51.2 192v-68.267L0 98.304v123.563l125.717 74.666L256 222.422V74.155z"></svg:path>`,
})
export class LogosUikitIcon {
  readonly viewBox = input("0 0 256 297")
  readonly width = input("0.87em")
  readonly height = input("1em")
}
