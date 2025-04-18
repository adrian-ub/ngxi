import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlutterIcon],svg[arcticons-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.592 38.574l16.859-16.045H27.768L16.75 33.014L27.768 43.5h11.683L28.433 33.014M7.636 24.34l5.94 5.654L40.364 4.5H28.681z"></svg:path>`,
})
export class ArcticonsFlutterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
