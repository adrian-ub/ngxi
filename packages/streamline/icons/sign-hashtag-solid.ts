import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignHashtagSolidIcon],svg[streamline-sign-hashtag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.178.09a.75.75 0 0 1 .594.879l-.513 2.67h1.913a.75.75 0 1 1 0 1.5h-2.201l-.716 3.722h2.917a.75.75 0 1 1 0 1.5H9.966l-.568 2.953a.75.75 0 1 1-1.473-.283l.514-2.67H4.743l-.568 2.953a.75.75 0 1 1-1.473-.283l.514-2.67H.827a.75.75 0 0 1 0-1.5h2.677l.716-3.723H.827a.75.75 0 1 1 0-1.5H4.51L5.076.686A.75.75 0 1 1 6.55.969l-.513 2.67h3.696L10.3.686a.75.75 0 0 1 .879-.595Zm-5.43 5.048l-.716 3.723h3.695l.716-3.723z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignHashtagSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
