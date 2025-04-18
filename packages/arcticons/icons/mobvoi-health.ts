import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobvoiHealthIcon],svg[arcticons-mobvoi-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.272 42.5a6.99 6.99 0 0 0 6.992-6.992h0V24.567a6.99 6.99 0 0 0-6.992-6.984H13.331a6.99 6.99 0 0 0-6.988 6.984a6.99 6.99 0 0 0 6.988 6.996h3.942V35.5a6.99 6.99 0 0 0 6.988 6.995h.011zm6.992-12.083h3.401c3.86 0 6.99-3.128 6.992-6.988a6.99 6.99 0 0 0-6.992-6.991h-3.938v-3.946A6.99 6.99 0 0 0 23.735 5.5h-.003h0a6.99 6.99 0 0 0-6.992 6.992v5.09"></svg:path>`,
})
export class ArcticonsMobvoiHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
