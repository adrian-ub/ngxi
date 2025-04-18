import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPentagonIcon],svg[hugeicons-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.208 5.405C8.978 3.135 10.363 2 12 2s3.022 1.135 5.792 3.405l.256.21c2.286 1.874 3.429 2.81 3.815 4.126s-.073 2.71-.992 5.495l-.183.554c-.98 2.975-1.471 4.463-2.662 5.315c-1.65 1.182-4.126.853-6.026.853c-3.175 0-4.836 0-6.026-.853c-1.19-.852-1.681-2.34-2.662-5.315l-.183-.554c-.919-2.786-1.378-4.179-.992-5.495S3.666 7.49 5.952 5.616z" color="currentColor"></svg:path>`,
})
export class HugeiconsPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
