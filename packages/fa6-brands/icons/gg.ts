import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsGgIcon],svg[fa6-brands-gg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m179.2 230.4l102.4 102.4l-102.4 102.4L0 256L179.2 76.8l44.8 44.8l-25.6 25.6l-19.2-19.2l-128 128l128 128l51.5-51.5l-77.1-76.5zM332.8 76.8L230.4 179.2l102.4 102.4l25.6-25.6l-77.1-76.5l51.5-51.5l128 128l-128 128l-19.2-19.2l-25.6 25.6l44.8 44.8L512 256z"></svg:path>`,
})
export class Fa6BrandsGgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
