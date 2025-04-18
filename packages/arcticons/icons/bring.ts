import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBringIcon],svg[arcticons-bring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.18 11.09v-2.2a4.39 4.39 0 0 1 4.43-4.39h8.78a4.39 4.39 0 0 1 4.39 4.39v2.2M15.55 31.56l7.86 4.53l9-15.66m-17.19-9.34h17.56"></svg:path><svg:rect width="25.999" height="32.41" x="11" y="11.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsBringIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
