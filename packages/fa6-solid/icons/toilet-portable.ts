import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidToiletPortableIcon],svg[fa6-solid-toilet-portable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32v32h320V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32m24 64H0v392c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h224v8c0 13.3 10.7 24 24 24s24-10.7 24-24V96zm232 144v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"></svg:path>`,
})
export class Fa6SolidToiletPortableIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
