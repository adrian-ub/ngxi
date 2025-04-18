import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPackageIcon],svg[codicon-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.61 3l5.74 1.53L15 5v6.74l-.37.48l-6.13 1.69l-6.14-1.69l-.36-.48V5l.61-.47L8.34 3zm-.09 1l-4 1l.55.2l3.43.9l3-.81l.95-.29zM3 11.36l5 1.37V7L3 5.66zM9 7v5.73l5-1.37V5.63l-2.02.553V8.75l-1 .26V6.457z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconPackageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
