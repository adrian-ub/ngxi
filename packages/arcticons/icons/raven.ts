import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRavenIcon],svg[arcticons-raven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.638 20.912l2.938-8.296L38.362 5.5l-2.938 8.296zm0 10.794l2.938-8.296l25.786-7.116l-2.938 8.296zm0 10.794l2.938-8.295l25.786-7.117l-2.938 8.296z"></svg:path>`,
})
export class ArcticonsRavenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
