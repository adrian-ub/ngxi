import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siHomeLineIcon],svg[si-home-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M18.6 22H5.4A2.4 2.4 0 0 1 3 19.588V8.332c0-.382.18-.734.48-.965l7.78-5.126a1.195 1.195 0 0 1 1.44 0l7.82 5.126c.3.231.48.583.48.965v11.256A2.4 2.4 0 0 1 18.6 22Z"></svg:path><svg:path d="M9.8 12h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8Z"></svg:path></svg:g>`,
})
export class SiHomeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
