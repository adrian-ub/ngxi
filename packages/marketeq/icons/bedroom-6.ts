import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBedroom6Icon],svg[marketeq-bedroom-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 35.417v4.166m-29.166-4.166v4.166zm0-20.834v-4.166m20.833 4.166a4.167 4.167 0 0 0-4.167-4.166h-4.166a4.167 4.167 0 0 0-4.167 4.166h-8.333v12.5h29.166v-12.5zm8.333 0v-4.166z"></svg:path><svg:path stroke="#306CFE" d="M10.417 27.083h29.166a4.167 4.167 0 0 1 4.167 4.167v4.167H6.25V31.25a4.167 4.167 0 0 1 4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqBedroom6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
