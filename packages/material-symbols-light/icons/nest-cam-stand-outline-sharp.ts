import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNestCamStandOutlineSharpIcon],svg[material-symbols-light-nest-cam-stand-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.425q-1.384.54-2.32 1.766T6.6 12L6 19h12l-.6-7q-.12-1.588-1.055-2.814Q15.41 7.958 14 7.419V10q0 .846-.577 1.423T12 12t-1.423-.577T10 10zM12 11q.425 0 .713-.288T13 10V6q0-.425-.288-.712T12 5t-.712.288T11 6v4q0 .425.288.713T12 11m0-7q.823 0 1.391.545t.603 1.363v.423q1.812.569 3.034 2.062t1.391 3.484L19.117 20H4.902l.698-8.123q.175-1.99 1.385-3.48q1.21-1.491 3.02-2.06v-.423q.036-.818.604-1.366T12 4"></svg:path>`,
})
export class MaterialSymbolsLightNestCamStandOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
