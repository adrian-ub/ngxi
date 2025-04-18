import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlertTriangleOutlineIcon],svg[healthicons-alert-triangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M24 6a1 1 0 0 1 .894.553l17 34A1 1 0 0 1 41 42H7a1 1 0 0 1-.894-1.447l17-34A1 1 0 0 1 24 6M8.618 40h30.764L24 9.236z" clip-rule="evenodd"></svg:path><svg:path d="M22 20a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0zm0 15.966C22 34.88 22.88 34 23.967 34h.067a1.966 1.966 0 1 1 0 3.933h-.067A1.966 1.966 0 0 1 22 35.966"></svg:path></svg:g>`,
})
export class HealthiconsAlertTriangleOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
