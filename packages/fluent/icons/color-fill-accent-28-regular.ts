import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFillAccent28RegularIcon],svg[fluent-color-fill-accent-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.512 17.75a3 3 0 0 0-.012.25a3.5 3.5 0 0 0 6.973.438c.479.456.777 1.1.777 1.812v1.5a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5v-1.5a2.5 2.5 0 0 1 2.5-2.5h1.011l1.102 1.102a3.75 3.75 0 0 0 5.303 0l1.101-1.102z"></svg:path>`,
})
export class FluentColorFillAccent28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
