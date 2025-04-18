import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsDataExchangeForApisIcon],svg[aws-data-exchange-for-apis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8C4FFF" fill-rule="evenodd" d="M14,34.007 L34,34.007 L34,14.007 L14,14.007 L14,34.007 Z M35,12.007 C35.553,12.007 36,12.455 36,13.007 L36,35.007 C36,35.559 35.553,36.007 35,36.007 L13,36.007 C12.447,36.007 12,35.559 12,35.007 L12,13.007 C12,12.455 12.447,12.007 13,12.007 L35,12.007 Z M25.793,29.714 L27.207,28.3 L22.914,24.007 L27.207,19.714 L25.793,18.3 L20.793,23.3 C20.402,23.691 20.402,24.323 20.793,24.714 L25.793,29.714 Z M7.707,10.3 L5.414,8.007 L43,8.007 L43,6.007 L5.414,6.007 L7.707,3.714 L6.293,2.3 L2.293,6.3 C1.902,6.691 1.902,7.323 2.293,7.714 L6.293,11.714 L7.707,10.3 Z M45.707,41.714 L41.707,45.714 L40.293,44.3 L42.586,42.007 L5,42.007 L5,40.007 L42.586,40.007 L40.293,37.714 L41.707,36.3 L45.707,40.3 C46.098,40.691 46.098,41.323 45.707,41.714 L45.707,41.714 Z"></svg:path>`,
})
export class AwsDataExchangeForApisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
