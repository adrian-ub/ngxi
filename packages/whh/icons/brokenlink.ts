import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBrokenlinkIcon],svg[whh-brokenlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M948.21 948.5q-76.5 76.5-185 76.5t-184.5-77l-52-51l113-64l25 24q39 40 95.5 40t96.5-40t40-96.5t-40-95.5l-188-189l76-101l203 204q77 76 77 184.5t-76.5 185M231.71 392l345 121l-32 128l-350-130q-105-27-159-120t-26-197t122-157.5t199-26.5l214 87l-32 128l-211-94q-54-14-103 14t-64 82t13.5 102.5t83.5 62.5"></svg:path>`,
})
export class WhhBrokenlinkIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
