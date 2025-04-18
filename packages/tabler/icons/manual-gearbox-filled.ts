import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerManualGearboxFilledIcon],svg[tabler-manual-gearbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a3 3 0 0 1 1 5.829V10a3 3 0 0 1-3 3h-4v2.171A3.001 3.001 0 1 1 9 18l.005-.176A3 3 0 0 1 11 15.17V13H6v2.171A3.001 3.001 0 1 1 2 18l.005-.176A3 3 0 0 1 4 15.17V8.829A3 3 0 0 1 2 6l.005-.176a3 3 0 1 1 3.996 3.005L6 11h5V8.83A3 3 0 0 1 9 6l.005-.176a3 3 0 1 1 3.996 3.005L13 11h4a1 1 0 0 0 1-1V8.83A3 3 0 0 1 16 6l.005-.176A3 3 0 0 1 19 3"></svg:path>`,
})
export class TablerManualGearboxFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
