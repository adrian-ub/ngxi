import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsReservedInstanceReportingIcon],svg[aws-reserved-instance-reporting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" fill="#7AA116"></svg:rect><svg:path fill="#FFF" d="M44.77,43.372 L38.708,37.294 L37.292,38.706 L43.347,44.777 L32.005,49.478 L20.622,44.767 L26.707,38.708 L25.294,37.291 L19.221,43.339 L14.521,32.004 L19.221,20.65 L25.294,26.708 L26.707,25.292 L20.631,19.232 L31.996,14.521 L43.341,19.218 L37.291,25.294 L38.709,26.705 L44.764,20.623 L49.48,31.996 L44.77,43.372 Z M54,33 L54,31 L51.232,31 L46.293,19.087 L48.655,16.716 L47.237,15.305 L44.868,17.685 L33,12.772 L33,10 L31,10 L31,12.769 L19.097,17.703 L16.691,15.302 L15.279,16.718 L17.689,19.122 L12.773,31 L10,31 L10,33 L12.769,33 L17.688,44.865 L15.279,47.264 L16.691,48.681 L19.086,46.296 L31,51.227 L31,54 L33,54 L33,51.231 L44.875,46.309 L47.238,48.678 L48.654,47.266 L46.3,44.906 L51.228,33 L54,33 Z M32,36.28 C29.64,36.28 27.72,34.36 27.72,32 C27.72,29.64 29.64,27.72 32,27.72 C34.361,27.72 36.281,29.64 36.281,32 C36.281,34.36 34.361,36.28 32,36.28 L32,36.28 Z M32,25.72 C28.538,25.72 25.72,28.537 25.72,32 C25.72,35.463 28.538,38.28 32,38.28 C35.463,38.28 38.281,35.463 38.281,32 C38.281,28.537 35.463,25.72 32,25.72 L32,25.72 Z"></svg:path></svg:g>`,
})
export class AwsReservedInstanceReportingIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
