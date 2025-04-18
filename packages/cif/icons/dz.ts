import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifDzIcon],svg[cif-dz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M0 0h300v200H0z"></svg:path><svg:path fill="#006233" d="M0 0h150v200H0z"></svg:path><svg:circle cx="150" cy="100" r="50" fill="#D21034"></svg:circle><svg:g fill="#D21034"><svg:path d="M177.951 123.776v-25h-15z"></svg:path><svg:path d="m177.951 123.776l-14.694-20.225l12.135-8.817z"></svg:path><svg:path d="m195.225 100l-23.776 7.726l-4.635-14.266z"></svg:path><svg:path d="m195.225 100l-23.776-7.725l-4.635 14.266z"></svg:path><svg:path d="M177.951 76.223v25h-15z"></svg:path><svg:path d="m150 114.694l23.776-7.725l-4.635-14.266z"></svg:path><svg:path d="m150 114.694l14.694-20.225l12.135 8.817z"></svg:path><svg:path d="m150 85.305l14.694 20.226l12.135-8.817z"></svg:path><svg:path d="m150 85.305l23.776 7.726l-4.635 14.266z"></svg:path><svg:path d="m177.951 76.223l-14.694 20.226l12.135 8.817z"></svg:path></svg:g></svg:g>`,
})
export class CifDzIcon {
  readonly viewBox = input("0 0 300 200")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
