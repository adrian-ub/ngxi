import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AirplaneSolidIcon],svg[fluent-mdl2-airplane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1856 768q40 0 75 15t61 41t41 61t15 75t-15 75t-41 61t-61 41t-75 15h-544l-384 768H662l256-768H256l-67 128H0l108-320L0 640h189l67 128h662L662 0h266l384 768z"></svg:path>`,
})
export class FluentMdl2AirplaneSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
