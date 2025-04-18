import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoYandexIcon],svg[gravity-ui-logo-yandex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.136 5.103a.75.75 0 0 0-1.272.795l2.044 3.27c.223.357.342.77.342 1.192v1.14a.75.75 0 0 0 1.5 0v-1.14a3.75 3.75 0 0 0-.57-1.987zm5 .795a.75.75 0 1 0-1.272-.795L8.77 6.853a.75.75 0 0 0 1.272.795z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoYandexIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
