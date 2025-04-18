import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideo48FilledIcon],svg[fluent-video-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.25A6.25 6.25 0 0 1 10.25 10h14.5A6.25 6.25 0 0 1 31 16.25v15.5A6.25 6.25 0 0 1 24.75 38h-14.5A6.25 6.25 0 0 1 4 31.75zm34.907 19.168L33 31.339v-14.68l5.907-4.078c2.156-1.488 5.097.055 5.097 2.675v17.487c0 2.62-2.941 4.163-5.097 2.675"></svg:path>`,
})
export class FluentVideo48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
