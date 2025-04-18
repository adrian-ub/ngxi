import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidShapesIcon],svg[fa6-solid-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2h192c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2zM288 312v144c0 22.1 17.9 40 40 40h144c22.1 0 40-17.9 40-40V312c0-22.1-17.9-40-40-40H328c-22.1 0-40 17.9-40 40M128 512a128 128 0 1 0 0-256a128 128 0 1 0 0 256"></svg:path>`,
})
export class Fa6SolidShapesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
