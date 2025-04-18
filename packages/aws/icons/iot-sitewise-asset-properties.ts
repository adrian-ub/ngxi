import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsIotSitewiseAssetPropertiesIcon],svg[aws-iot-sitewise-asset-properties-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7AA116" fill-rule="evenodd" d="M20,32 C18.346,32 17,33.346 17,35 C17,36.654 18.346,38 20,38 C21.654,38 23,36.654 23,35 C23,33.346 21.654,32 20,32 L20,32 Z M20,40 C17.243,40 15,37.757 15,35 C15,32.243 17.243,30 20,30 C22.757,30 25,32.243 25,35 C25,37.757 22.757,40 20,40 L20,40 Z M29,21 C27.346,21 26,22.346 26,24 C26,25.654 27.346,27 29,27 C30.654,27 32,25.654 32,24 C32,22.346 30.654,21 29,21 L29,21 Z M29,29 C26.243,29 24,26.757 24,24 C24,21.243 26.243,19 29,19 C31.757,19 34,21.243 34,24 C34,26.757 31.757,29 29,29 L29,29 Z M17,10 C15.346,10 14,11.346 14,13 C14,14.654 15.346,16 17,16 C18.654,16 20,14.654 20,13 C20,11.346 18.654,10 17,10 L17,10 Z M17,18 C14.243,18 12,15.757 12,13 C12,10.243 14.243,8 17,8 C19.757,8 22,10.243 22,13 C22,15.757 19.757,18 17,18 L17,18 Z M6,36 L13,36 L13,34 L6,34 L6,36 Z M27,36 L42,36 L42,34 L27,34 L27,36 Z M6,25 L22,25 L22,23 L6,23 L6,25 Z M36,25 L42,25 L42,23 L36,23 L36,25 Z M6,14 L10,14 L10,12 L6,12 L6,14 Z M24,14 L42,14 L42,12 L24,12 L24,14 Z M4,44 L44,44 L44,4 L4,4 L4,44 Z M45,46 L3,46 C2.448,46 2,45.552 2,45 L2,3 C2,2.448 2.448,2 3,2 L45,2 C45.552,2 46,2.448 46,3 L46,45 C46,45.552 45.552,46 45,46 L45,46 Z"></svg:path>`,
})
export class AwsIotSitewiseAssetPropertiesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
