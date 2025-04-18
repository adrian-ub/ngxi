import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFilmIcon],svg[flat-color-icons-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M45 9H3v30h42zM22 37v-4h4v4zm8 0v-4h4v4zm8 0v-4h4v4zm-24 0v-4h4v4zm-8 0v-4h4v4zm16-22v-4h4v4zm8 0v-4h4v4zm8 0v-4h4v4zm-24 0v-4h4v4zm-8 0v-4h4v4z"></svg:path>`,
})
export class FlatColorIconsFilmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
