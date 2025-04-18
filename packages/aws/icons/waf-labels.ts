import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsWafLabelsIcon],svg[aws-waf-labels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD344C" fill-rule="evenodd" d="M13,33.009 L41,33.009 L41,31.009 L13,31.009 L13,33.009 Z M13,25.009 L46,25.009 L46,23.009 L13,23.009 L13,25.009 Z M19,11.009 C19,12.112 18.103,13.009 17,13.009 C15.897,13.009 15,12.112 15,11.009 C15,9.906 15.897,9.009 17,9.009 C18.103,9.009 19,9.906 19,11.009 L19,11.009 Z M21,11.009 C21,8.803 19.206,7.009 17,7.009 C14.794,7.009 13,8.803 13,11.009 C13,13.215 14.794,15.009 17,15.009 C19.206,15.009 21,13.215 21,11.009 L21,11.009 Z M32,46.009 L2,46.009 L2,12.487 L11.068,2.009 L22.923,2 L32,12.487 L32,20.009 L30,20.009 L30,13.232 L22.009,4.001 L11.982,4.009 L4,13.232 L4,44.009 L30,44.009 L30,37.009 L32,37.009 L32,46.009 Z"></svg:path>`,
})
export class AwsWafLabelsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
