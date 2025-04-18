import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentElevator48RegularIcon],svg[fluent-elevator-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zm12.5 2.5v27h-12.5a3.75 3.75 0 0 1-3.75-3.75v-19.5a3.75 3.75 0 0 1 3.75-3.75zm2.5 27v-27h12.5a3.75 3.75 0 0 1 3.75 3.75v19.5a3.75 3.75 0 0 1-3.75 3.75zm13.134-11.116l-4.25 4.25a1.25 1.25 0 0 1-1.768 0l-4.25-4.25a1.25 1.25 0 0 1 1.768-1.768L32 26.732V18.25a1.25 1.25 0 1 1 2.5 0v8.482l2.116-2.116a1.25 1.25 0 0 1 1.768 1.768m-24.518-9.018a1.25 1.25 0 0 1 1.768 0l4.25 4.25a1.25 1.25 0 0 1-1.768 1.768L16 21.268v8.482a1.25 1.25 0 1 1-2.5 0v-8.482l-2.116 2.116a1.25 1.25 0 0 1-1.768-1.768z"></svg:path>`,
})
export class FluentElevator48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
