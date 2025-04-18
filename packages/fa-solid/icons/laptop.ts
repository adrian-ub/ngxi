import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidLaptopIcon],svg[fa-solid-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16M576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512zm-64 272H128V64h384z"></svg:path>`,
})
export class FaSolidLaptopIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
