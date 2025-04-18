import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOfficesuiteIcon],svg[arcticons-officesuite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.807 14.858L5.5 24.053l5.277 9.142L16.084 24z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.084 24l-5.307 9.195h10.554L26.639 24zm-5.277-9.142L16.084 24h10.555l-5.278-9.142z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.669 5.662l-5.308 9.196L26.639 24l5.307-9.195zm5.277 9.143L26.639 24h10.554l5.307-9.195z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.669 5.662l5.277 9.143H42.5l-5.277-9.143zM26.639 24l-5.308 9.195l5.277 9.143l5.308-9.196z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.916 33.142l-5.308 9.196h10.555l5.307-9.196zM26.639 24l5.277 9.142H42.47L37.193 24z"></svg:path>`,
})
export class ArcticonsOfficesuiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
