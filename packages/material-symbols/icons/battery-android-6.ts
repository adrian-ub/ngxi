import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroid6Icon],svg[material-symbols-battery-android-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16.75h2v-9.5h-2zm-12 2q-.825 0-1.412-.587T2 16.75v-9.5q0-.825.588-1.412T4 5.25h14q.825 0 1.413.588T20 7.25V9.5h.5q.625 0 1.063.438T22 11v2q0 .65-.437 1.075T20.5 14.5H20v2.25q0 .825-.587 1.413T18 18.75z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroid6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
