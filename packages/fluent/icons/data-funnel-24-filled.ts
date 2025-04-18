import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataFunnel24FilledIcon],svg[fluent-data-funnel-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.248 7.504a2.752 2.752 0 0 0 0-5.504H4.75a2.752 2.752 0 1 0 0 5.504zm-2 7a2.752 2.752 0 1 0 0-5.504H6.75a2.752 2.752 0 0 0 0 5.504zM17 18.752A2.75 2.75 0 0 0 14.248 16H9.75a2.752 2.752 0 0 0 0 5.504h4.498A2.75 2.75 0 0 0 17 18.752"></svg:path>`,
})
export class FluentDataFunnel24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
