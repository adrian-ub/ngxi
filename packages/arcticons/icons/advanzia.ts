import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdvanziaIcon],svg[arcticons-advanzia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.988c-4.351 4.718-7.27-3.884-8.16-11.095c-.625-5.05-1.628-11.46-6.509-14.556c-2.785-2.025-7.8-2.696-12.042-.83C6.117 15.2 4.76 31.584 13.136 37.374c3.776 2.61 8.912 3.806 14.457-1.196c7.64-6.89 13.53-21.152 13.35-27.809"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.157 21.419c4.116 0 8.387-.095 12.437-.095M4.5 27.285c3.953 0 8.032-.142 11.92-.142"></svg:path>`,
})
export class ArcticonsAdvanziaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
