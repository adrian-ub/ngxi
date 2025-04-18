import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDonutLargeIcon],svg[material-symbols-light-donut-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.006 20.95q-3.446-.356-5.723-2.917T3.006 12t2.277-6.014q2.276-2.542 5.723-2.936v1.23q-2.927.409-4.848 2.595Q4.236 9.062 4.236 12t1.922 5.125t4.848 2.594zm2 0v-1.23q2.638-.3 4.485-2.191q1.846-1.89 2.234-4.529h1.23q-.35 3.171-2.573 5.405q-2.224 2.233-5.376 2.545M19.725 11q-.408-2.639-2.244-4.51t-4.475-2.21V3.05q3.152.35 5.376 2.574T20.956 11z"></svg:path>`,
})
export class MaterialSymbolsLightDonutLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
