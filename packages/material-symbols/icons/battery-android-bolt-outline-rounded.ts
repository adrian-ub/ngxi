import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroidBoltOutlineRoundedIcon],svg[material-symbols-battery-android-bolt-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.425 12.75l-.625 2.8q-.05.2.125.275t.3-.05L13.9 12.1q.25-.25.125-.55t-.475-.3h-1.975l.625-2.8q.05-.2-.125-.275t-.3.05L8.1 11.9q-.25.25-.125.55t.475.3zM4 16.75h14v-9.5H4zm0 2q-.825 0-1.412-.587T2 16.75v-9.5q0-.825.588-1.412T4 5.25h14q.825 0 1.413.588T20 7.25V9.5h.5q.625 0 1.063.438T22 11v2q0 .65-.437 1.075T20.5 14.5H20v2.25q0 .825-.587 1.413T18 18.75zm0-2v-9.5z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroidBoltOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
