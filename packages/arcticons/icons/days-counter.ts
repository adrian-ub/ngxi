import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaysCounterIcon],svg[arcticons-days-counter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.413 17.165l-.04 9.295l8.376 7.13m-7.367 8.91h17.227V27.784"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.188 42.158A18.23 18.23 0 0 1 5.477 22.493a18.679 18.679 0 0 1 37.132-.673"></svg:path>`,
})
export class ArcticonsDaysCounterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
