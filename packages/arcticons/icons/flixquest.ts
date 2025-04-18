import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlixquestIcon],svg[arcticons-flixquest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.24 28.067v-10.83L30.707 4.5l9.053 5.338z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.24 28.067l18.02-10.422l8.956 5.304L8.24 38.432zm0 10.365l9.132-5.229V43.5z"></svg:path>`,
})
export class ArcticonsFlixquestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
