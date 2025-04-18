import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psAwsIcon],svg[ps-aws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 87l204 67v292L3 377zm255 360l205-70V89l-204 64zm-25-328l188-61L232 1L39 58z"></svg:path>`,
})
export class PsAwsIcon {
  readonly viewBox = input("0 0 464 480")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
