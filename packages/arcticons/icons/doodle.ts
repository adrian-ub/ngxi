import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDoodleIcon],svg[arcticons-doodle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.8 4.5h8.1v39h-8.1v-1.8c-5.4 3.4-12.5 1.8-15.9-3.6s-1.8-12.5 3.6-15.9c3.7-2.4 8.5-2.4 12.2 0V4.5zm-6.1 22.7c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8c0-2.6-2.2-4.8-4.8-4.8q0 0 0 0"></svg:path>`,
})
export class ArcticonsDoodleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
