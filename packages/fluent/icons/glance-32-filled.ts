import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlance32FilledIcon],svg[fluent-glance-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 25.75A3.25 3.25 0 0 1 25.75 29h-5.5A3.25 3.25 0 0 1 17 25.75v-8.5A3.25 3.25 0 0 1 20.25 14h5.5A3.25 3.25 0 0 1 29 17.25zm-15-11A3.25 3.25 0 0 1 10.75 18h-4.5A3.25 3.25 0 0 1 3 14.75v-8.5A3.25 3.25 0 0 1 6.25 3h4.5A3.25 3.25 0 0 1 14 6.25zm15-7A3.25 3.25 0 0 1 25.75 11h-5.5A3.25 3.25 0 0 1 17 7.75v-1.5A3.25 3.25 0 0 1 20.25 3h5.5A3.25 3.25 0 0 1 29 6.25zm-15 18A3.25 3.25 0 0 1 10.75 29h-4.5A3.25 3.25 0 0 1 3 25.75v-1.5A3.25 3.25 0 0 1 6.25 21h4.5A3.25 3.25 0 0 1 14 24.25z"></svg:path>`,
})
export class FluentGlance32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
