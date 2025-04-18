import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonColumnDependencyIcon],svg[carbon-column-dependency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 10V2h-8v3h-5a2 2 0 0 0-2 2v8h-5v-3H2v8h8v-3h5v8a2 2 0 0 0 2 2h5v3h8v-8h-8v3h-5v-8h5v3h8v-8h-8v3h-5V7h5v3ZM8 18H4v-4h4Zm16 6h4v4h-4Zm0-10h4v4h-4Zm0-10h4v4h-4Z"></svg:path>`,
})
export class CarbonColumnDependencyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
