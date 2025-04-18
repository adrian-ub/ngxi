import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsBitbucketIcon],svg[fa-brands-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.2 32A16 16 0 0 0 6 47.8a26 26 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3a25 25 0 0 0-2.8-.2zm285.9 297.8h-104l-28.1-147h157.3z"></svg:path>`,
})
export class FaBrandsBitbucketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
