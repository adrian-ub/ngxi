import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungCameraAssistantIcon],svg[arcticons-samsung-camera-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 28.5h15a4 4 0 0 0 4-4v-15a4 4 0 0 0-4-4h-15a4 4 0 0 0-4 4v15a4 4 0 0 0 4 4m-12.5-2V37m0-31.5v10"></svg:path><svg:circle cx="11" cy="21" r="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.5" cy="37" r="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 37h-7.5m26 0H35"></svg:path><svg:circle cx="31" cy="17" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37" cy="11" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsSamsungCameraAssistantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
