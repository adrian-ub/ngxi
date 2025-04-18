import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMygestureIcon],svg[arcticons-mygesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.17 12.825C27.72-1.271 13.896 2.597 13.388 11.389c-.488 14.058 15.781.225 16.022 12.101c-.036 4.503-.125 9.77-.088 14.252c-1.483 15.294-19.446.64-12.552-5.046c5.084-4.785 17.854-9.334 17.854-9.334"></svg:path>`,
})
export class ArcticonsMygestureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
