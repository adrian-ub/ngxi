import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudArchive48FilledIcon],svg[fluent-cloud-archive-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17H24v-3.17A3 3 0 0 1 22 29v-3a3 3 0 0 1 3-3h19.248a8.5 8.5 0 0 0-7.748-5h-.541C35.45 11.84 30.29 7 24 7m1 18a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm1 7h18v9a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4zm12 3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2"></svg:path>`,
})
export class FluentCloudArchive48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
