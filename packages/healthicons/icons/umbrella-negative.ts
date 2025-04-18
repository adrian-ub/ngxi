import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUmbrellaNegativeIcon],svg[healthicons-umbrella-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUmbrellaNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.976 5a1 1 0 1 0-2 0v1.029c-9.144.5-16.47 7.826-16.97 16.97c-.017.293.339.343.557.147a7.17 7.17 0 0 1 4.815-1.847c2.17 0 4.116.96 5.436 2.48c.119.137.289.22.47.22c.16 0 .313-.065.428-.177a8.97 8.97 0 0 1 5.264-2.47V39.5a4.5 4.5 0 1 0 9 0V38a1 1 0 1 0-2 0v1.5a2.5 2.5 0 0 1-5 0V21.356a8.97 8.97 0 0 1 5.223 2.456a.66.66 0 0 0 .453.187c.191 0 .37-.088.496-.232a7.18 7.18 0 0 1 5.426-2.468c1.851 0 3.54.699 4.815 1.847c.218.196.573.146.557-.147c-.5-9.144-7.826-16.47-16.97-16.97z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUmbrellaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUmbrellaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
