import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKuarioIcon],svg[arcticons-kuario-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 13.25l9.31 5.375v10.75L24 34.75l-9.31-5.375v-10.75z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 2.5l18.62 10.75v21.5L24 45.5L5.38 34.75v-21.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.69 18.625L24 24l9.31-5.375M24 24v10.75m-9.31-5.375L5.38 34.75m27.93-5.375l9.31 5.375M24 2.5v10.75"></svg:path>`,
})
export class ArcticonsKuarioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
