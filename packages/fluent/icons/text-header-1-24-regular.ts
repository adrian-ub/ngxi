import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHeader124RegularIcon],svg[fluent-text-header-1-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.59 5.082a.75.75 0 0 0-.809.083a.75.75 0 0 0-.249.367c-.69 2.051-2.057 3.409-3.168 4.075a.75.75 0 0 0 .772 1.286c.774-.464 1.623-1.18 2.364-2.146v9.503a.75.75 0 0 0 1.5 0V5.772a.75.75 0 0 0-.41-.69M3.5 5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V12.5H10v5.75a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0V11H3.5z"></svg:path>`,
})
export class FluentTextHeader124RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
