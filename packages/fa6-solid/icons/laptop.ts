import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidLaptopIcon],svg[fa6-solid-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 32c-35.3 0-64 28.7-64 64v256h64V96h384v256h64V96c0-35.3-28.7-64-64-64zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2z"></svg:path>`,
})
export class Fa6SolidLaptopIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
