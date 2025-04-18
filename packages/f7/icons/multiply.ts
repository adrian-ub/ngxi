import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MultiplyIcon],svg[f7-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.012 40.012c-.797.797-.82 2.156 0 2.976c.797.82 2.156.797 2.976 0l12-12.023l12.024 12.023c.797.797 2.156.82 2.953 0c.844-.82.82-2.18 0-2.976l-12-12.024l12-12c.82-.797.844-2.18 0-2.976c-.797-.82-2.156-.797-2.953 0L27.988 25.035l-12-12.023c-.82-.797-2.18-.82-2.976 0c-.82.797-.797 2.18 0 2.976l12 12Z"></svg:path>`,
})
export class F7MultiplyIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
