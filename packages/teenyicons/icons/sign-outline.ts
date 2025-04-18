import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSignOutlineIcon],svg[teenyicons-sign-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6.5V6a.5.5 0 0 0-.5.5zm10 0h.5a.5.5 0 0 0-.5-.5zm0 6v.5a.5.5 0 0 0 .5-.5zm-10 0H4a.5.5 0 0 0 .5.5zM1 1v14h1V1zM0 4h15V3H0zm4.5 3h10V6h-10zm9.5-.5v6h1v-6zm.5 5.5h-10v1h10zm-9.5.5v-6H4v6zm1-9v3h1v-3zm6 0v3h1v-3z"></svg:path>`,
})
export class TeenyiconsSignOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
