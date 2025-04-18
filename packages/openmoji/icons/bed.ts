import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBedIcon],svg[openmoji-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a57939" d="M5 42.5h62V49H5z"></svg:path><svg:path fill="#d0cfce" d="M5 42v-4c0-1.65 1.35-3 3-3h56c1.65 0 3 1.35 3 3v4"></svg:path><svg:path fill="#92d3f5" d="M5.125 30.44s6.387-2.767 12.27-2.721c2.296.018 5.686 1.897 5.712 3.874l-1.104 2.16l-15 1l-.812 1.25l-1.062-1.625l-.125-3.625z"></svg:path><svg:path fill="#92d3f5" d="m22 41.6l.434-8.291c-3.052-4.924 32.48-2.528 44.6-2.638c.817 4.338.044 6.264-.03 11.32"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M5 42h62v7H5zm0-1.01v-4c0-1.65 1.35-3 3-3h13.83M5 55.03V16.97m62 10.07v28M20.42 29.73c-1.61-1.197-4.604-1.538-7.357-1.598c-4.582.011-8.882 1.329-7.933 5.274M67 41.99v-8.32c0-1.65-1.35-3-2.99-3.001l-38.81-.001c-1.65 0-3 1.35-3 3v8"></svg:path>`,
})
export class OpenmojiBedIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
