import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIcons3dBoxDuotoneIcon],svg[lets-icons-3d-box-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M12 13v8l-7-5V8l7-5l7 5z"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.2" d="M12 21v-8m0 8l-6.162-4.402c-.411-.293-.616-.44-.727-.655S5 15.475 5 14.971V8m7 13l6.163-4.402c.41-.293.615-.44.726-.655s.111-.468.111-.972V8m-7 5L5 8m7 5l7-5M5 8l5.838-4.17c.56-.4.842-.601 1.162-.601s.601.2 1.162.601L19 8"></svg:path></svg:g>`,
})
export class LetsIcons3dBoxDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
