import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBitbucketIcon],svg[gg-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.583 4.635c-.552 0-.915.44-.811.982l2.456 12.766c.104.542.637.982 1.189.982h9.166c.552 0 1.085-.44 1.189-.982l2.456-12.766c.104-.542-.259-.982-.811-.982zm8.962 9.73l.91-4.73h-4.91l.91 4.73z" clip-rule="evenodd"></svg:path>`,
})
export class GgBitbucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
