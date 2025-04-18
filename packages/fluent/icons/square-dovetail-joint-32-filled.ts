import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareDovetailJoint32FilledIcon],svg[fluent-square-dovetail-joint-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19.272c0-.312.146-.605.393-.795c.249-.189.572-.251.87-.17L19 20.144v-8.289l-6.737 1.837A1.002 1.002 0 0 1 11 12.727V3H7.5A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29H11zM24.5 3H13v8.418l6.737-1.837a1.002 1.002 0 0 1 1.263.965v10.908a1.002 1.002 0 0 1-1.263.965L13 20.582V29h11.5a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3"></svg:path>`,
})
export class FluentSquareDovetailJoint32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
