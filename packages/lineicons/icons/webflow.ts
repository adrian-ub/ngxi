import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsWebflowIcon],svg[lineicons-webflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m22 5.765l-6.39 12.47H9.622l2.664-5.172h-.123C9.975 15.926 6.68 17.805 2 18.236V13.14s3.002-.17 4.758-2.033H2V5.765h5.343v4.403h.123l2.186-4.403h4.05v4.372h.123l2.247-4.372z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsWebflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
