import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCube24FilledIcon],svg[fluent-cube-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.409 2.511a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.173v9.653a1.75 1.75 0 0 0 1.093 1.621l7.498 3.04a3.75 3.75 0 0 0 2.818 0l7.498-3.04A1.75 1.75 0 0 0 22 16.826V7.173a1.75 1.75 0 0 0-1.093-1.622zm-7.36 5.472a.75.75 0 0 1 .967-.435L12 9.438l4.984-1.89a.75.75 0 1 1 .532 1.402l-4.766 1.81v5.49a.75.75 0 1 1-1.5 0v-5.49L6.484 8.95a.75.75 0 0 1-.435-.967"></svg:path>`,
})
export class FluentCube24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
