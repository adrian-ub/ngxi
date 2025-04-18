import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDownloadFillIcon],svg[iconamoon-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 18a1 1 0 0 1-1-1v-7H7a1 1 0 0 1-.707-1.707l5-5a1 1 0 0 1 1.414 0l5 5A1 1 0 0 1 17 10h-4v7a1 1 0 0 1-1 1m-6 1a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
