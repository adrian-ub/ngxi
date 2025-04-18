import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibServerFaultIcon],svg[cib-server-fault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 24.245v3.036h-6.521v-3.036zm-32-.141h15.339v3.031H0v-3.036zm17.188 0h6.521v3.031h-6.521v-3.036zm8.291-4.807H32v3.031h-6.521zM0 19.156h15.339v3.031H0zm17.188 0h6.521v3.031h-6.521zm8.291-4.463H32v3.031h-6.521zM0 14.552h15.339v3.031H0zm17.188 0h6.521v3.031h-6.521zm8.291-4.807H32v3.036h-6.521zM0 9.609h15.339v3.031H0V9.598zm17.188 0h6.521v3.031h-6.521V9.598zm8.291-4.744H32v3.036h-6.521V4.859zM0 4.719h15.339v3.036H0zm17.188 0h6.521v3.036h-6.521z"></svg:path>`,
})
export class CibServerFaultIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
