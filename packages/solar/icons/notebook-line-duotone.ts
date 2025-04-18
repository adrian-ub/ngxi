import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarNotebookLineDuotoneIcon],svg[solar-notebook-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z"></svg:path><svg:path stroke-linecap="round" d="M8 2.5V22M2 12h2m-2 4h2M2 8h2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M11.5 6.5h5m-5 3.5h5"></svg:path></svg:g>`,
})
export class SolarNotebookLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
