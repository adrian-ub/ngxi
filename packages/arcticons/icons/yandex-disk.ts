import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYandexDiskIcon],svg[arcticons-yandex-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="25.416" cy="28.041" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.065" ry="3.646" transform="rotate(-24.069 25.416 28.041)"></svg:ellipse><svg:ellipse cx="24.258" cy="25.449" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="21.828" ry="8.63" transform="rotate(-24.069 24.258 25.45)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.15 33.858c-2.309-5.773 2.09-8.164 4.504-11.588c3.432-4.866 2.5-7.91 9.675-10.612c6.677-2.514 8.617.543 13.284.384c4.5-.154 8.288-.538 11.914 3.517"></svg:path>`,
})
export class ArcticonsYandexDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
