import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarClipboardCheckBoldIcon],svg[solar-clipboard-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121c-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zm9.012 8.511a.75.75 0 1 0-1.024-1.096l-3.774 3.522l-1.202-1.122a.75.75 0 0 0-1.024 1.096l1.715 1.6a.75.75 0 0 0 1.023 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarClipboardCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
