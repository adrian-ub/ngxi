import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCassetteBoldDuotoneIcon],svg[solar-cassette-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4v4h-1.228c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.5 4z" clip-rule="evenodd" opacity=".4"></svg:path><svg:path fill="currentColor" d="M16.973 5.404L17.5 4H12v4h1.228c1.34 0 2.011 0 2.525-.356s.75-.984 1.22-2.24" opacity=".6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.171C2 6.343 2 8.23 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.829c-.737-.737-1.756-1.01-3.35-1.111l-.505 1.344c-.47 1.256-.706 1.884-1.22 2.24S14.57 8 13.228 8h-2.456c-1.34 0-2.011 0-2.525-.356s-.75-.984-1.22-2.24L6.522 4.06c-1.594.101-2.613.374-3.35 1.111M8.25 11.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m7.5 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarCassetteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
