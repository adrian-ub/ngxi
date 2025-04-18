import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsReaderFollowIcon],svg[gridicons-reader-follow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.5h12V11h1.5V3h-15v12a2 2 0 0 0 2 2h7v-1.5h-7A.5.5 0 0 1 4 15zm10.5 2h-9V8h9zm-5 3h-4V11h4zM13 11h-1v1h1zm-1-1.5h-1.5v4h4v-4H13zM9.5 12h-4v1.5h4zm6.5 1.25h1.5v2.25h2.25V17H17.5v2.25H16V17h-2.25v-1.5H16z" clip-rule="evenodd"></svg:path>`,
})
export class GridiconsReaderFollowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
