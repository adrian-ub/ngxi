import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalWebServiceSolidIcon],svg[streamline-online-medical-web-service-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.547 12.25V3.314h10.907v8.934a.204.204 0 0 1-.204.205H1.751a.204.204 0 0 1-.204-.205Zm-1.5-10.5C.047.81.81.046 1.75.046h10.5c.94 0 1.704.763 1.704 1.704v10.5c0 .94-.764 1.704-1.705 1.704H1.751a1.705 1.705 0 0 1-1.704-1.705z" clip-rule="evenodd"></svg:path><svg:path d="M6.364 5.04a.39.39 0 0 0-.393.392v1.56h-1.56a.39.39 0 0 0-.392.392V8.66c0 .217.175.393.392.393h1.56v1.56c0 .217.176.392.392.392h1.275a.39.39 0 0 0 .393-.392v-1.56h1.56a.39.39 0 0 0 .392-.393V7.384a.39.39 0 0 0-.392-.392h-1.56v-1.56a.39.39 0 0 0-.392-.393z"></svg:path></svg:g>`,
})
export class StreamlineOnlineMedicalWebServiceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
