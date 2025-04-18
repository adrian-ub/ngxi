import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCloudMinusLightIcon],svg[stash-cloud-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.5a5.5 5.5 0 0 0-5.456 4.802l-.04.31l-.295.1A4.002 4.002 0 0 0 6.5 18.5h11a4 4 0 1 0-.514-7.967l-.48.061l-.076-.478A5.5 5.5 0 0 0 11 5.5M4.597 9.875a6.502 6.502 0 0 1 12.73-.372q.086-.003.173-.003a5 5 0 0 1 0 10h-11a5 5 0 0 1-1.903-9.625"></svg:path><svg:path fill="currentColor" d="M8.5 13a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashCloudMinusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
