import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidCloudUploadIcon],svg[heroicons-solid-cloud-upload-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 13a3.5 3.5 0 0 1-.369-6.98a4 4 0 1 1 7.753-1.977Q13.187 4 13.5 4a4.5 4.5 0 1 1 0 9H11V9.414l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L9 9.414V13zM9 13h2v5a1 1 0 1 1-2 0z"></svg:path>`,
})
export class HeroiconsSolidCloudUploadIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
