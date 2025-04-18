import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpeedometerIcon],svg[arcticons-speedometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m29.082 26.506l-3.78-4.188l.979-11.895H43.5l-.98 11.889l-4.467 4.174"></svg:path><svg:path d="m29.49 21.514l-4.467 4.174l-.98 11.89h17.22l.98-11.896l-3.782-4.187"></svg:path><svg:path d="m38.052 26.486l-.565 6.901H28.52l.564-6.882zM43.5 10.423l-4.476 4.19m-12.744-4.19l3.776 4.19m11.207 22.964l-3.776-4.19m-7.996-11.873l.565-6.901h8.968l-.563 6.882zm-5.447 16.063l4.475-4.19m-7.343-9.392l-2.667 2.491m-8.562-4.972L5.48 25.688l-.98 11.89h17.22l.979-11.896l-3.782-4.187zl.566-6.901h8.968l4.476-4.19H6.737l-.98 11.895l3.782 4.187"></svg:path><svg:path d="m18.509 26.486l-.565 6.901H8.976l.563-6.882zM6.737 10.423l3.776 4.19M21.72 37.577l-3.776-4.19M4.5 37.577l4.476-4.19"></svg:path></svg:g>`,
})
export class ArcticonsSpeedometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
