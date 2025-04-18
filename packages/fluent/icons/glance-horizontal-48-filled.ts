import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlanceHorizontal48FilledIcon],svg[fluent-glance-horizontal-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.25A4.25 4.25 0 0 1 10.25 6h11.5A4.25 4.25 0 0 1 26 10.25v7.5A4.25 4.25 0 0 1 21.75 22h-11.5A4.25 4.25 0 0 1 6 17.75zM34.25 6A4.25 4.25 0 0 0 30 10.25v7.5A4.25 4.25 0 0 0 34.25 22h3.5A4.25 4.25 0 0 0 42 17.75v-7.5A4.25 4.25 0 0 0 37.75 6zm-24 20A4.25 4.25 0 0 0 6 30.25v7.5A4.25 4.25 0 0 0 10.25 42h3.5A4.25 4.25 0 0 0 18 37.75v-7.5A4.25 4.25 0 0 0 13.75 26zm16 0A4.25 4.25 0 0 0 22 30.25v7.5A4.25 4.25 0 0 0 26.25 42h11.5A4.25 4.25 0 0 0 42 37.75v-7.5A4.25 4.25 0 0 0 37.75 26z"></svg:path>`,
})
export class FluentGlanceHorizontal48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
