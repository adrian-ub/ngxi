import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRabbitIcon],svg[icon-park-outline-rabbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="24" cy="32" stroke="currentColor" stroke-width="4" rx="17" ry="12"></svg:ellipse><svg:circle cx="18" cy="29.412" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="35.412" r="2" fill="currentColor"></svg:circle><svg:circle cx="30" cy="29.412" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12.667 22c-1.315-3.167-3.607-10.887-2.254-16.087c.376-1 1.803-2.7 4.509-1.5c.375.166 1.24.8 1.69 2C17.74 8.413 16.05 21 16.05 21m19.337 1c1.316-3.167 3.545-10.887 2.192-16.087c-.376-1-1.804-2.7-4.51-1.5c-.376.166-1.24.8-1.691 2c-1.128 2 .626 13.587.626 13.587"></svg:path></svg:g>`,
})
export class IconParkOutlineRabbitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
