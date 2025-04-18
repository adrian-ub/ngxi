import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSr1x1Icon],svg[flag-sr-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#377e3f" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 102.4h512v307.2H0z"></svg:path><svg:path fill="#b40a2d" d="M0 153.6h512v204.8H0z"></svg:path><svg:path fill="#ecc81d" d="m255.9 163.4l60.2 185.2l-157.6-114.5h194.8L195.7 348.6z"></svg:path>`,
})
export class FlagSr1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
