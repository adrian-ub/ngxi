import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HandwritingIcon],svg[fluent-mdl2-handwriting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1562 384q26 0 62-3t76-3t79 3t71 18t50 42t20 71v896q0 27-10 50t-27 40t-41 28t-50 10H128q-27 0-50-10t-40-27t-28-41t-10-50V512q0-27 10-50t27-40t41-28t50-10h870l325-325q28-28 64-43t77-16q41 0 77 16t63 43t43 63t16 78q0 33-7 57t-21 46t-32 40t-41 41m-98-256q-29 0-50 21L594 969l-34 135l135-34l681-680q-2-2 0-5t5-1q12-12 38-34t52-47t45-53t20-50q0-30-21-51t-51-21m328 384h-358l-673 674l-377 94l94-377l392-391H128v896h1664z"></svg:path>`,
})
export class FluentMdl2HandwritingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
