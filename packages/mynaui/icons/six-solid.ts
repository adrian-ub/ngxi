import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSixSolidIcon],svg[mynaui-six-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.75a4.5 4.5 0 0 1 4.5-4.5h1.25a.75.75 0 0 1 0 1.5H12.5a3 3 0 0 0-3 3v.442c.69-.402 1.53-.567 2.375-.567c.96 0 1.915.213 2.65.745c.766.555 1.225 1.41 1.225 2.505a3.875 3.875 0 0 1-7.75 0zm1.5 3.125a2.375 2.375 0 1 0 4.75 0c0-.63-.24-1.026-.605-1.29c-.396-.286-1.005-.46-1.77-.46s-1.374.174-1.77.46c-.364.264-.605.66-.605 1.29"></svg:path>`,
})
export class MynauiSixSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
