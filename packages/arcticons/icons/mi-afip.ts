import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiAfipIcon],svg[arcticons-mi-afip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.398 27.532V11.269l8.069 16.281l8.068-16.256V27.55"></svg:path><svg:circle cx="35.212" cy="11.777" r=".75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.212 16.763V27.55m-8.315 4.219v4.962m3.19 0v-4.962h1.705c.964 0 1.745.746 1.745 1.666s-.781 1.667-1.745 1.667h-1.705m-8.984-.852h1.693m-1.693 2.481v-4.962h2.604m-6.365 3.318h-2.308m-.571 1.644l1.725-4.962l1.725 4.962"></svg:path>`,
})
export class ArcticonsMiAfipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
