import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAutomaticGearboxFilledIcon],svg[tabler-automatic-gearbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16a3 3 0 0 1 0 6h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 4l.117-.007A1 1 0 0 0 18 18zm.5-13a2.5 2.5 0 1 1 0 5H18v1a1 1 0 0 1-.883.993L17 14a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-.5 3h.5a.5.5 0 1 0 0-1H18zm-5 0a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3a2 2 0 0 1-2-2v-6H6a2 2 0 0 1-1.995-1.85L4 10V7.83A3 3 0 0 1 2 5l.005-.176a3 3 0 1 1 3.996 3.005L6 10z"></svg:path>`,
})
export class TablerAutomaticGearboxFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
