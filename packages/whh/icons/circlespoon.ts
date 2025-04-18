import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclespoonIcon],svg[whh-circlespoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M929 808L651 573q19-30 21-93q2-71-56-129q-71-71-168-90t-154 33q-53 58-33.5 155T351 617q55 55 129 55q59 0 93-20l236 277q-134 95-297 95q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 163-95 296"></svg:path>`,
})
export class WhhCirclespoonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
