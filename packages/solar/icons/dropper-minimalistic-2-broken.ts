import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDropperMinimalistic2BrokenIcon],svg[solar-dropper-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 16h-4"></svg:path><svg:path d="M14 10.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.86.86 0 0 1 1.26 0c.587.619 1.37 1.58 1.37 2.3Z"></svg:path><svg:path stroke-linecap="round" d="M12 21v1m2-18a2 2 0 1 0-4 0"></svg:path><svg:path stroke-linecap="round" d="M5 8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586S19 6.114 19 8v7.883c0 .76-.32 1.487-.88 2.001a9.053 9.053 0 0 1-12.24 0a2.72 2.72 0 0 1-.88-2V12"></svg:path></svg:g>`,
})
export class SolarDropperMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
