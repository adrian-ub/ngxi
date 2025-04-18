import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartsIcon],svg[tabler-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.017 18L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.153 5.784"></svg:path><svg:path d="m15.99 20l4.197-4.223a2.81 2.81 0 0 0 0-3.948a2.747 2.747 0 0 0-3.91-.007l-.28.282l-.279-.283a2.747 2.747 0 0 0-3.91-.007a2.81 2.81 0 0 0-.007 3.948L15.983 20z"></svg:path></svg:g>`,
})
export class TablerHeartsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
