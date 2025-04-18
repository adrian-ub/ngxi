import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSomeFacebookIcon],svg[nrk-some-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.387 7.32c0-.788.174-1.187 1.398-1.187h1.535V3.2h-2.347c-2.933 0-4.106 1.957-4.106 4.107v1.76H7.52V12h2.347v8.8h3.52V12h2.585l.348-2.933h-2.933z"></svg:path>`,
})
export class NrkSomeFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
