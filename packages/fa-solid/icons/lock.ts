import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidLockIcon],svg[fa-solid-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48m-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72z"></svg:path>`,
})
export class FaSolidLockIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
