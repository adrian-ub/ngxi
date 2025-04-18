import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTurffIcon],svg[arcticons-turff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.785 8.4v25.45c0 5.426 6.295 9.65 11.046 9.65c5.47 0 8.416-.813 11.384-3.022l-5.298-5.428c-2.085 1.163-4.62 2.236-7.342-.65V18.8h8.158v-7.15h-8.158V4.5z"></svg:path>`,
})
export class ArcticonsTurffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
