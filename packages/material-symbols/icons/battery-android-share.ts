import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroidShareIcon],svg[material-symbols-battery-android-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18.75q-.825 0-1.412-.587T2 16.75v-9.5q0-.825.588-1.412T4 5.25h14q.825 0 1.413.588T20 7.25V9.5h.5q.625 0 1.063.438T22 11v2q0 .65-.437 1.075T20.5 14.5H20v2.25q0 .825-.587 1.413T18 18.75zm2-3h2v-3h4.175l-1.1 1.075L12.5 15.25l3.5-3.5l-3.5-3.5l-1.4 1.4l1.075 1.1H8q-.825 0-1.412.588T6 12.75z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroidShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
