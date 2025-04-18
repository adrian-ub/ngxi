import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYoukuIcon],svg[arcticons-youku-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.999 4.766a7.774 7.774 0 0 0-1.877 14.244L19.766 24l-8.646 4.99a7.774 7.774 0 0 0-2.846 10.62A7.78 7.78 0 0 0 18.9 42.457l17.985-10.429c5.18-3.003 5.179-13.051 0-16.055L18.9 5.543a7.76 7.76 0 0 0-5.9-.778"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.767 24c4.373 2.516 12.046 6.91 15.573 8.928"></svg:path>`,
})
export class ArcticonsYoukuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
