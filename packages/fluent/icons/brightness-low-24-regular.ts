import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrightnessLow24RegularIcon],svg[fluent-brightness-low-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 12 3.5M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-1.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m7.75-2.75a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5zM12 18a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 12 18m-6.75-5.25a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0 0 1.5zm.97-6.53a.75.75 0 0 1 1.06 0l.5.5a.75.75 0 0 1-1.06 1.06l-.5-.5a.75.75 0 0 1 0-1.06m1.06 11.56a.75.75 0 0 1-1.06-1.06l.5-.5a.75.75 0 0 1 1.06 1.06zm10.5-11.56a.75.75 0 0 0-1.06 0l-.5.5a.75.75 0 0 0 1.06 1.06l.5-.5a.75.75 0 0 0 0-1.06m-1.06 11.56a.75.75 0 1 0 1.06-1.06l-.5-.5a.75.75 0 1 0-1.06 1.06z"></svg:path>`,
})
export class FluentBrightnessLow24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
