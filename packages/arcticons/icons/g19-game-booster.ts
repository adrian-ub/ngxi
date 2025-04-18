import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsG19GameBoosterIcon],svg[arcticons-g19-game-booster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.898 43.5c-.586-.003-16.564-9.33-16.854-9.838c-.29-.509-.193-18.995.102-19.5c.296-.506 16.37-9.665 16.956-9.662s16.564 9.33 16.854 9.838c.29.509.193 18.995-.102 19.5c-.296.505-16.37 9.665-16.956 9.662M24 12.23V24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.507 30.723L24 24l10.46 6.655"></svg:path>`,
})
export class ArcticonsG19GameBoosterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
