import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faHeadphonesIcon],svg[fa-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 758q0 166-60 314l-20 49l-185 33q-22 83-90.5 136.5T1152 1344v32q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V800q0-14 9-23t23-9h64q14 0 23 9t9 23v32q71 0 130 35.5t93 95.5l68-12q29-95 29-193q0-148-88-279t-236.5-209T832 192t-315.5 78T280 479t-88 279q0 98 29 193l68 12q34-60 93-95.5T512 832v-32q0-14 9-23t23-9h64q14 0 23 9t9 23v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-32q-88 0-156.5-53.5T265 1154l-185-33l-20-49Q0 924 0 758q0-151 67-291t179-242.5T512 61T832 0t320 61t266 163.5T1597 467t67 291"></svg:path>`,
})
export class FaHeadphonesIcon {
  readonly viewBox = input("0 0 1664 1408")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
