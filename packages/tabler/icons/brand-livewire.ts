import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandLivewireIcon],svg[tabler-brand-livewire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="tablerBrandLivewire0" d="M20.982 18.777C20.61 19.325 20.33 20 19.576 20c-1.269 0-1.337-1.913-2.607-1.913S15.769 20 14.499 20c-1.268 0-1.337-1.913-2.607-1.913c-1.269 0-1.2 1.913-2.47 1.913c-1.268 0-1.337-1.913-2.607-1.913S5.615 20 4.345 20c-.398 0-.679-.189-.915-.448A10.4 10.4 0 0 1 2 14.262C2 8.593 6.477 4 12 4c5.524 0 10 4.594 10 10.261c0 1.62-.366 3.152-1.018 4.516"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:use href="#tablerBrandLivewire0"></svg:use><svg:use href="#tablerBrandLivewire0"></svg:use><svg:path d="M11.5 16c3.167 0 4.5-1.748 4.5-4.231C16 9.285 13.986 7 11.5 7C9.015 7 7 9.286 7 11.769S8.333 16 11.5 16"></svg:path><svg:path d="M10 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class TablerBrandLivewireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
