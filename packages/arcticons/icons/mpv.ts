import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMpvIcon],svg[arcticons-mpv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="25.165" cy="22.721" r="16.612"></svg:circle><svg:circle cx="23.139" cy="24.408" r="10.762"></svg:circle><svg:path d="m20.712 20.011l-.204 8.71l7.36-4.392z"></svg:path></svg:g>`,
})
export class ArcticonsMpvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
