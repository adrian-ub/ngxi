import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCloudIcon],svg[heroicons-solid-cloud-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16a3.5 3.5 0 0 1-.369-6.98a4 4 0 1 1 7.753-1.977Q13.187 7 13.5 7a4.5 4.5 0 1 1 0 9z"></svg:path>`,
})
export class HeroiconsSolidCloudIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
