import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsStorageIcon],svg[aws-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:rect width="64" height="64" x="5" y="5" fill="#7AA116"></svg:rect><svg:rect width="72" height="72" x="1" y="1" stroke="#879196" stroke-width="2"></svg:rect><svg:path fill="#FFF" d="M14,30 L26,30 L26.001,33 L14,33 L14,30 Z M14,35 L26,35 C27.103,35 28,34.103 28,33 L28,30 C28,28.897 27.103,28 26,28 L14,28 C12.897,28 12,28.897 12,30 L12,33 C12,34.103 12.897,35 14,35 L14,35 Z M12,19 L28,19 L28,17 L12,17 L12,19 Z M12,9 L18,9 L18,7 L12,7 L12,9 Z M12,14 L19,14 L19,12 L12,12 L12,14 Z M38,40.746 C38,41.438 37.437,42 36.746,42 L3.254,42 C2.562,42 2,41.438 2,40.746 L2,25 L38,25 L38,40.746 Z M9,2 L23,2 L23,9 C23,9.552 23.447,10 24,10 L31,10 L31,23 L9,23 L9,2 Z M25,3.414 L29.586,8 L25,8 L25,3.414 Z M39,23 L33,23 L33,9 L32.991,9 C32.99,8.74 32.898,8.484 32.707,8.293 L24.707,0.293 C24.516,0.102 24.26,0.01 24,0.009 L24,0 L8,0 C7.447,0 7,0.448 7,1 L7,23 L1,23 C0.447,23 0,23.448 0,24 L0,40.746 C0,42.541 1.46,44 3.254,44 L36.746,44 C38.54,44 40,42.541 40,40.746 L40,24 C40,23.448 39.553,23 39,23 L39,23 Z" transform="translate(17 15)"></svg:path></svg:g>`,
})
export class AwsStorageIcon {
  readonly viewBox = input("0 0 74 74")
  readonly width = input("1em")
  readonly height = input("1em")
}
