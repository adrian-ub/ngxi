import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCut20RegularIcon],svg[fluent-cut-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.92 2.228a.5.5 0 0 0-.84.544L9.405 9.43L7.48 12.39a3 3 0 1 0 .779.636L10 10.348l1.74 2.68a3 3 0 1 0 .779-.636zM14 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4M4 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7.192-6.489l-.596-.918l3.485-5.365a.5.5 0 0 1 .838.544z"></svg:path>`,
})
export class FluentCut20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
