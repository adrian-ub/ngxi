import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPortuIcon],svg[arcticons-portu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.005 34.189l18.495-10.5l-.03-8.436l-18.409 10.558zm-.01 0L5.5 23.689l.03-8.436l18.409 10.558zM5.526 15.232L24.117 4.244l18.304 10.935"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.984 28.956L6.396 33.34l17.932 10.415l17.93-10.415l-8.068-4.638"></svg:path>`,
})
export class ArcticonsPortuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
