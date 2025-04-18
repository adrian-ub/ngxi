import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwLaptopIcon],svg[uiw-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.364 2.35v10.794h17.272V2.35zM19.09 1c.502 0 .909.403.909.9v11.694c0 .497-.407.9-.91.9l-8.53-.001v3.157h3.437c.377 0 .682.303.682.675a.68.68 0 0 1-.682.675H5.981a.68.68 0 0 1-.682-.675c0-.372.306-.674.682-.674l3.216-.001v-3.157H.909A.904.904 0 0 1 0 13.595V1.9c0-.497.407-.9.91-.9z"></svg:path>`,
})
export class UiwLaptopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
