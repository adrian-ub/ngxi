import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRegisteredSolidIcon],svg[la-registered-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5m-4 5v12h2v-4h3.406L19 22h2l-1.688-4.25C20.875 17.207 22 15.75 22 14c0-2.21-1.79-4-4-4zm2 2h4c1.191 0 2 .809 2 2s-.809 2-2 2h-4z"></svg:path>`,
})
export class LaRegisteredSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
