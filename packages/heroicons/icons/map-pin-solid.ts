import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsMapPinSolidIcon],svg[heroicons-map-pin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.54 22.351l.07.04l.028.016a.76.76 0 0 0 .723 0l.028-.015l.071-.041q.091-.053.255-.153c.217-.133.524-.33.89-.589a19.6 19.6 0 0 0 2.682-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.6 19.6 0 0 0 2.682 2.282a17 17 0 0 0 1.145.742M12 13.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsMapPinSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
