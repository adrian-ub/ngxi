import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBarsProgressIcon],svg[fa6-solid-bars-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 160H320v-32h128zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zm400 288v32H192v-32zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"></svg:path>`,
})
export class Fa6SolidBarsProgressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
