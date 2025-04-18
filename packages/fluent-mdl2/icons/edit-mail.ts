import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EditMailIcon],svg[fluent-mdl2-edit-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1707 953q28-28 65-41t76-13q42 0 78 14t62 41t42 62t16 78q0 39-15 76t-43 65l-715 717l-377 94l94-377zm192 192q21-21 21-51q0-32-20-50t-52-19q-14 0-27 4t-23 14l-692 692l-34 135l135-34zm149-761v450q-29-21-61-34t-67-22V648l-896 447l-896-447v888h814l-128 128H0V384zM1024 953l881-441H143z"></svg:path>`,
})
export class FluentMdl2EditMailIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
