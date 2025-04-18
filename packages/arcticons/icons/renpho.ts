import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRenphoIcon],svg[arcticons-renpho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.835 42.5l18.169-17.688a12.45 12.45 0 0 0 9.938-3.36a10.59 10.59 0 0 0 3.187-9.417"></svg:path><svg:ellipse cx="23.739" cy="11.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.184" ry="6.02"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.165 42.493L31.791 32.394c-7.795 3.081-15.218-.348-15.218-.348"></svg:path>`,
})
export class ArcticonsRenphoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
