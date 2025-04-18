import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAdCircleOffIcon],svg[tabler-ad-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.91 4.949A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 7.05-2.909m1.728-2.298A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10c-1.74 0-3.376.444-4.8 1.225"></svg:path><svg:path d="M7 15v-4.5a1.5 1.5 0 0 1 2.138-1.358m.716.711c.094.196.146.415.146.647V15m-3-2h3m4 1v1h1m2-2v-2a2 2 0 0 0-2-2h-1v1M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAdCircleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
