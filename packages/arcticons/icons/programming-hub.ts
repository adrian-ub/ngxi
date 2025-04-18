import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProgrammingHubIcon],svg[arcticons-programming-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.153 43.5V23.364m0-12.054V4.5h12.415a12.892 12.892 0 1 1 0 25.784H14.153"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.403 17.485l-10.06 5.807V11.677Zm-10.265-5.808l-11.95-.196m12.154 4.099H10.931m10.241 3.586H8.54m12.495 4.126H10.452"></svg:path>`,
})
export class ArcticonsProgrammingHubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
