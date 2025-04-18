import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCapnpIcon],svg[material-icon-theme-capnp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c62828" d="M17 3V2h4v8h-4c-.085-2.088-.445-4.042-3-4c-2.917 0-5 2.51-5 5c0 3 .495 6.981 4.67 6.981c2.906-.26 2.99-2.705 3.33-4.981h4c0 5.806-3.314 9.052-9 9c-6.154-.073-8.915-4.685-9-10c-.128-6.14 4.568-9.2 10.414-9.65c1.301-.028 2.466 0 3.586.65"></svg:path>`,
})
export class MaterialIconThemeCapnpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
