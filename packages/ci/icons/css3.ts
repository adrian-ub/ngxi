import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCss3Icon],svg[ci-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.983 20.989l-6.37-1.813l-1.42-16.033h15.615l-1.42 16.034l-6.4 1.812h-.004Zm-4.261-7.637l.216 2.867L12 17.483l3.99-1.14l.906-9.923h-9.8l.158 1.949h7.529l-.186 2.024H9.66l.178 1.912h4.6l-.272 2.62l-2.164.6l-2.2-.6l-.14-1.57h-1.94v-.003Z"></svg:path>`,
})
export class CiCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
