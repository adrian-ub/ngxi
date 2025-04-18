import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasBitbucketIcon],svg[pajamas-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.454 1.816a.45.45 0 0 0-.345.153a.44.44 0 0 0-.103.358L2.91 13.684c.049.287.3.498.596.5h9.135a.45.45 0 0 0 .449-.37L14.994 2.33a.44.44 0 0 0-.1-.358a.45.45 0 0 0-.342-.156zm8.018 8.208H6.557l-.79-4.05h4.412z"></svg:path>`,
})
export class PajamasBitbucketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
