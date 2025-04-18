import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBitbucketSolidIcon],svg[teenyicons-bitbucket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 0a.5.5 0 0 0-.495.57l2 14A.5.5 0 0 0 2.5 15h10a.5.5 0 0 0 .495-.43L14.219 6H9.373l-.333 4H5.96l-.417-5h8.82l.632-4.43A.5.5 0 0 0 14.5 0z"></svg:path>`,
})
export class TeenyiconsBitbucketSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
