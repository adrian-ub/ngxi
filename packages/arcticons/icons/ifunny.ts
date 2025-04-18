import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIfunnyIcon],svg[arcticons-ifunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38 26.87a14.24 14.24 0 0 1-27.89 0"></svg:path><svg:ellipse cx="17.2" cy="18.44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.5" ry="4.22"></svg:ellipse><svg:ellipse cx="30.61" cy="18.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.5" ry="4.22"></svg:ellipse>`,
})
export class ArcticonsIfunnyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
