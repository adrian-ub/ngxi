import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilCloudCheckSolidIcon],svg[basil-cloud-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.38 7.194a5.41 5.41 0 0 1 9.952 2.605q.095-.004.191-.004a4.478 4.478 0 0 1 0 8.955H6.875A5.875 5.875 0 1 1 8.38 7.194m6.65 4.336a.75.75 0 0 0-1.06-1.06L11 13.44l-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class BasilCloudCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
