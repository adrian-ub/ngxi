import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCitationIcon],svg[material-icon-theme-citation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M256 192c-106.039 0-192 85.961-192 192c.189 103.43 82.273 188.122 185.646 191.545L128 832h128l173.473-365.715C441.746 440.412 447.323 412.44 448 384c0-106.039-85.961-192-192-192m512 0c-106.039 0-192 85.961-192 192c.189 103.43 82.273 188.122 185.646 191.545L640 832h128l173.473-365.715C953.746 440.412 959.323 412.44 960 384c0-106.039-85.961-192-192-192"></svg:path>`,
})
export class MaterialIconThemeCitationIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
