import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCameraIcon],svg[el-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M390.724 148.172L352.969 300H0v751.828h1200V300H863.484l-37.756-151.828zm212.341 151.537c186.396 0 337.453 151.066 337.453 337.453c0 186.396-151.068 337.453-337.453 337.453c-186.396 0-337.453-151.068-337.453-337.453c0-186.395 151.067-337.453 337.453-337.453m395.719 73.463h170.121v98.779H998.784zm-395.719 26.196c-131.337 0-237.797 106.47-237.797 237.797c0 131.337 106.47 237.797 237.797 237.797c131.337 0 237.797-106.47 237.797-237.797c0-131.337-106.469-237.797-237.797-237.797"></svg:path>`,
})
export class ElCameraIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
