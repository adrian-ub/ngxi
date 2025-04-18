import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsTelescopeIcon],svg[akar-icons-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m7 21l6-8l8 8M5.228 7.303l13.532-5.06a1 1 0 0 1 1.108.285l.19.22A8 8 0 0 1 22 7.973v.616a1 1 0 0 1-.65.937l-13.536 5.06z"></svg:path><svg:path d="M2.66 11.371a2 2 0 0 1 1.193-2.545l1.694-.624l1.944 5.473l-1.64.612a2 2 0 0 1-2.585-1.205zM13 13v9"></svg:path></svg:g>`,
})
export class AkarIconsTelescopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
