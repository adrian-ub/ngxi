import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMjEzIcon],svg[arcticons-mj-ez-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="24.207" cy="24.141" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="16.023" ry="15.865"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.185 19.758h-11.49v8.532h11.49m-8.473-4.164h8.454"></svg:path>`,
})
export class ArcticonsMjEzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
