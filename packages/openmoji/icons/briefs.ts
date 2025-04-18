import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBriefsIcon],svg[openmoji-briefs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61B2E4" d="M8.192 30.206c0-1.682.996-1.522 2.225-1.522h51.166c1.229 0 2.225-.16 2.225 1.522v1.575c0 2.686-.845 2.68-2.714 3.493c-12.859 5.591-10.02 6.275-16.19 14.72c-5.513 7.545-12.363 7.437-17.88-.1c-6.452-8.812-3.816-9.029-16.015-14.65c-1.898-.875-2.817-3.881-2.817-6.622z"></svg:path><svg:path fill="#92D3F5" d="M8.192 28.684c0-1.682.996-1.523 2.225-1.523h51.166c1.229 0 2.225 1.363 2.225 3.045v-1.47c0 2.686-.753 6.539-2.714 6.539c-20.645 0-18.976 15.693-22.864 20.254h-4.533c-2.702-2.939-2.146-19.993-22.688-20.285c-2.002-.028-2.817-.835-2.817-3.576z"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path d="M61.094 35.274c-12.859 5.591-10.02 6.275-16.19 14.72c-5.513 7.545-12.363 7.437-17.88-.1c-6.452-8.812-3.816-9.029-16.015-14.65"></svg:path><svg:path d="M32.585 54.562s-1.59-19.318-21.576-19.318c-2.002 0-2.817-2.358-2.817-5.099v-1.461c0-1.682.996-1.523 2.225-1.523h51.166c1.229 0 2.225-.16 2.225 1.523v1.575c0 2.685-.753 4.984-2.714 4.984c-20.089 0-21.752 19.32-21.752 19.32"></svg:path></svg:g>`,
})
export class OpenmojiBriefsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
