import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAbcIcon],svg[ic-sharp-abc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-1.5v-.5h-2v3h2V13H21v2h-5V9h5zM8 9v6H6.5v-1.5h-2V15H3V9zm-1.5 1.5h-2V12h2zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M11 10.5v.75h2v-.75zm2 2.25h-2v.75h2z"></svg:path>`,
})
export class IcSharpAbcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
