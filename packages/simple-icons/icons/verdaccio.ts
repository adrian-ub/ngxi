import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVerdaccioIcon],svg[simple-icons-verdaccio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.376 9.84L18.72 7.2h-4.8v.566h.864l-.192.377H12.96v.566h1.344l-.288.565H12v.566h1.728zm-4.255 8.64l3.68-7.265h-3.68l-1.064 2.103L8.959 7.2H5.28l5.712 11.28zM8.88 0h6.24A8.86 8.86 0 0 1 24 8.88v6.24A8.86 8.86 0 0 1 15.12 24H8.88A8.86 8.86 0 0 1 0 15.12V8.88A8.86 8.86 0 0 1 8.88 0"></svg:path>`,
})
export class SimpleIconsVerdaccioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
