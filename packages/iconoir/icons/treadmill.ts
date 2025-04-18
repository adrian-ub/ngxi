import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTreadmillIcon],svg[iconoir-treadmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-2.387 1.267l-3.308 4.135l4.135 4.135l-2.067 4.55"></svg:path><svg:path d="m4.41 8.508l3.387-3.309l2.816 2.068l2.895 3.308h1.722M6.892 14.71l-1.241.827H2.343m1 6l15.308-2V8"></svg:path><svg:path d="M20.892 6L18.65 8L17 9.5m3.891 12.21l-2.24-2.173"></svg:path></svg:g>`,
})
export class IconoirTreadmillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
