import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFactoryIcon],svg[whh-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-896q-27 0-45.5-19t-18.5-45V64q0-27 19-45.5t45-18.5h128q26 0 45 18.5t19 45.5v422l192-155q26-16 45-10t19 30v135l192-155q26-16 45-10t19 30v135l192-155q27-16 45.5-10t18.5 30v609q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhFactoryIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
