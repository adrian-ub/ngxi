import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumHospital1Icon],svg[circum-hospital-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.435 7.5h-1.93V5.56a2.5 2.5 0 0 0-2.5-2.5h-4a2.5 2.5 0 0 0-2.5 2.5V7.5h-1.94a2.5 2.5 0 0 0-2.5 2.5v9.44a1.51 1.51 0 0 0 1.5 1.5h14.87a1.5 1.5 0 0 0 1.5-1.5V10a2.5 2.5 0 0 0-2.5-2.5M7.505 19.94h-2.94a.51.51 0 0 1-.5-.5V10a1.5 1.5 0 0 1 1.5-1.5h1.94Zm8 0h-1.5v-2.5a2.04 2.04 0 0 0-.59-1.42a2 2 0 0 0-3.41 1.42v2.5h-1.5V5.56a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Zm4.43-.5a.5.5 0 0 1-.5.5h-2.93V8.5h1.93a1.5 1.5 0 0 1 1.5 1.5Z"></svg:path><svg:path fill="currentColor" d="M14.505 8.56a.5.5 0 0 1-.5.5h-1.5v1.5a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-1.5h-1.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5h1.5v-1.5a.5.5 0 0 1 .5-.5a.51.51 0 0 1 .5.5v1.5h1.5a.51.51 0 0 1 .5.5m-8.719 4.657a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5m0 4.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5m12.435-4.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5m0 4.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class CircumHospital1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
