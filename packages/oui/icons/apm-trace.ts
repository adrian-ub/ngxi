import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiApmTraceIcon],svg[oui-apm-trace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm.5 2h10a.5.5 0 1 1 0 1h-10a.5.5 0 0 1 0-1m1 3h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1m2 3h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1m3 3h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1"></svg:path>`,
})
export class OuiApmTraceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
