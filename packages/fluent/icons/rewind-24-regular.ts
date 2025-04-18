import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRewind24RegularIcon],svg[fluent-rewind-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 5.503c0-1.28-1.497-1.971-2.472-1.142l-7.41 6.306a1.75 1.75 0 0 0 0 2.665l7.41 6.306c.975.83 2.473.137 2.473-1.142v-3.988l6.028 5.13c.974.83 2.473.137 2.473-1.142V5.504c0-1.28-1.498-1.972-2.472-1.143L12.5 9.492zm0 7.035v-1.076l7.002-5.958v12.992zm-8.91-.729L11 5.503v12.993L3.59 12.19a.25.25 0 0 1 0-.38"></svg:path>`,
})
export class FluentRewind24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
