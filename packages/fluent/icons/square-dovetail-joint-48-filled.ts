import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareDovetailJoint48FilledIcon],svg[fluent-square-dovetail-joint-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28.568a1.248 1.248 0 0 1 1.632-1.191l7.868 2.522V18.098l-7.868 2.522A1.25 1.25 0 0 1 18 19.429V6h-5.75A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42H18zM35.75 6H20.5v11.719l7.868-2.522A1.248 1.248 0 0 1 30 16.388v15.227a1.248 1.248 0 0 1-1.632 1.191L20.5 30.284v11.719h15.25a6.25 6.25 0 0 0 6.25-6.25V12.25A6.25 6.25 0 0 0 35.75 6"></svg:path>`,
})
export class FluentSquareDovetailJoint48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
