import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTestTubeLinearIcon],svg[solar-test-tube-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m9.749 2.494l8.41 4.826M9.75 2.494l-7.1 12.252a4.827 4.827 0 0 0 1.776 6.605a4.86 4.86 0 0 0 6.629-1.77l1.495-2.58M9.75 2.493L8.913 2m9.246 5.32l-2.257 3.896m2.257-3.896l.841.484m-3.098 3.412l-1.713 2.958m1.713-2.958l-2.558-1.471m.845 4.429L12.55 17m1.638-2.826l-4.203-2.418M12.55 17l-2.613-1.503"></svg:path><svg:path d="M22 14.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path></svg:g>`,
})
export class SolarTestTubeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
