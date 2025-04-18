import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8FaxIcon],svg[icons8-fax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5v5h-2V8H4v18h2v1c0 1.645 1.355 3 3 3s3-1.355 3-3v-1h16V10h-4V5zm2 2h8v5h-8zm-8 3h2v14H6zm4 2h2v2h12v-2h2v12H10zm3 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM8 26h2v1c0 .555-.445 1-1 1s-1-.445-1-1z"></svg:path>`,
})
export class Icons8FaxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
