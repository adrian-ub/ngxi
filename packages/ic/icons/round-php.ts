import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPhpIcon],svg[ic-round-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 10.5h-2v1h2zm13.5 0h-2v1h2zm-7 2h-2v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75s.75.34.75.75V11h2V9.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm5 1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10c0-.55.45-1 1-1H20c.83 0 1.5.68 1.5 1.5v1c0 .82-.67 1.5-1.5 1.5h-2zM3 10c0-.55.45-1 1-1h2.5c.83 0 1.5.68 1.5 1.5v1c0 .82-.67 1.5-1.5 1.5h-2v1.25c0 .41-.34.75-.75.75S3 14.66 3 14.25z"></svg:path>`,
})
export class IcRoundPhpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
