import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadphones28RegularIcon],svg[fluent-headphones-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 26h-3a1 1 0 0 1-.993-.883L18 25v-8a1 1 0 0 1 .883-.993L19 16h5.5v-2c0-5.799-4.701-10.5-10.5-10.5S3.5 8.201 3.5 14v2H9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-8C2 7.373 7.373 2 14 2s12 5.373 12 12v8a4 4 0 0 1-3.8 3.995zh-3zM8.5 17.5h-5V22A2.5 2.5 0 0 0 6 24.5h2.5zm16 0h-5v7H22a2.5 2.5 0 0 0 2.5-2.5z"></svg:path>`,
})
export class FluentHeadphones28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
