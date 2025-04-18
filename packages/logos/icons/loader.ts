import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosLoaderIcon],svg[logos-loader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#497BBB"><svg:path d="m165.759 82.951l58.343 108.03l-19.343 28.728H51.344l-19.478-29.302L90.201 82.95zm16.047-26.903H74.194L.493 191.81l36.431 54.802h182.152l36.431-54.102z"></svg:path><svg:path d="M163.87 145.725h-42.596l15.694-42.596h-24.661l-33.544 67.455h98.474zM9.178 192.806l44.838 40.354h152.451l44.839-40.354zM128 0c-20.011 0-36.234 16.28-36.234 36.369c0 2.13.22 4.2.57 6.228h23.024c-.928-1.888-1.493-3.982-1.493-6.228c0-7.834 6.327-14.183 14.129-14.183c7.806 0 14.128 6.35 14.128 14.183c0 2.246-.57 4.34-1.493 6.228h23.03c.349-2.027.569-4.103.569-6.228C164.234 16.28 148.01 0 128 0"></svg:path></svg:g>`,
})
export class LogosLoaderIcon {
  readonly viewBox = input("0 0 256 247")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
