import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFactoryIcon],svg[flat-color-icons-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BF360C" d="M41.2 5h-7.3L32 43h11z"></svg:path><svg:path fill="#E64A19" d="M33 23h-4v-6l-12 6v-6L5 23v20h28z"></svg:path><svg:path fill="#FFC107" d="M9 27h4v4H9zm8 0h4v4h-4zm8 0h4v4h-4zM9 35h4v4H9zm8 0h4v4h-4zm8 0h4v4h-4z"></svg:path>`,
})
export class FlatColorIconsFactoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
