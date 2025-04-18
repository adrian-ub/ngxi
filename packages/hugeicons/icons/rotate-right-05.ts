import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight05Icon],svg[hugeicons-rotate-right-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.717 11.062l3.709-2.582c.615-.428.76-1.276.324-1.894a1.37 1.37 0 0 0-1.901-.345l-7.419 5.164l-.581.394l.03-2.54c0-.91-.792-1.617-1.698-1.517a1.53 1.53 0 0 0-1.346 1.302l-.642 4.486c-.146 1.018-.219 1.527-.182 2.016c.056.746.296 1.466.7 2.096c.264.412.629.776 1.357 1.503l1.536 1.533a4.53 4.53 0 0 0 5.695.57l3.294-2.18l.37-.258c.615-.427.76-1.275.325-1.893a1.37 1.37 0 0 0-1.901-.345l-.371.258m-1.3-5.768l-1.112.774m1.113-.774a1.37 1.37 0 0 1 1.9.345a1.35 1.35 0 0 1-.323 1.893l-.742.517m0 0l-.371.258m.37-.258a1.37 1.37 0 0 1 1.902.345c.435.618.29 1.466-.324 1.893l-.371.259M14.637 4.966c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C3.582 4.56 3.308 5.42 2.999 5.995" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
