import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZeppelinOffIcon],svg[tabler-zeppelin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.773 15.783c-.723.141-1.486.217-2.273.217q-3.194 0-7.364-2.777L4 15v-3.33A46 46 0 0 1 2 10a46 46 0 0 1 2-1.67V5l2.135 1.778q.196-.13.39-.256m2.564-1.42Q11.49 4 13.5 4c4.694 0 8.5 2.686 8.5 6c0 1.919-1.276 3.627-3.261 4.725"></svg:path><svg:path d="M10 15.5V20h6v-4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerZeppelinOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
