import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons24payIcon],svg[arcticons-24pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.297 36.894l3.422-19.414L24 30.52h12.862M13.427 17.537c.7-3.97 4.847-7.098 8.82-6.308c2.605.518 4.348 2.85 4.134 5.584c-.158 2.033-1.156 4.039-2.777 5.271c-3.004 2.283-12.466 8.436-12.466 8.436H24"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class Arcticons24payIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
