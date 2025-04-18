import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJagranIcon],svg[arcticons-jagran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.303 26.19c1.21 2.415 1.95 4.857 2.1 7.705H4.597c.227-10.968 9.189-19.79 20.21-19.79c7.916 0 14.769 4.55 18.087 11.176l-9.62 4.792"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.642 33.807c.204-9.862 8.262-17.68 18.172-17.68c4.554 0 8.716 1.675 11.906 4.441l-5.767 6.565"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.076 33.729a13 13 0 0 1-.018-.684c0-7.035 5.703-12.738 12.738-12.738c1.327 0 2.606.203 3.808.579l-1.167 3.992"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.754 33.73a9.05 9.05 0 0 1 18.1 0"></svg:path>`,
})
export class ArcticonsJagranIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
