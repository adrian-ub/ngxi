import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTomorrowIcon],svg[arcticons-tomorrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.892 4.5v33c0 2.115-2.067 6-2.067 6h12.299s-2.066-3.885-2.066-6v-33Zm8.222 0c5.68.932 13.178 9.739 13.178 9.739L39.347 4.5Zm-8.227 0c-5.681.932-13.179 9.739-13.179 9.739L8.653 4.5Z"></svg:path>`,
})
export class ArcticonsTomorrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
