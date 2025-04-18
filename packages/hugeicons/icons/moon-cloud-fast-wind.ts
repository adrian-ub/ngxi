import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoonCloudFastWindIcon],svg[hugeicons-moon-cloud-fast-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.402 21.915q.218.084.461.085c.765 0 1.385-.672 1.385-1.5s-.62-1.5-1.385-1.5a1.3 1.3 0 0 0-.738.23c-1.061.793-3.027 1.808-5.262 2.071m-2.769-.107a7.6 7.6 0 0 1-1.846-.646m15 .452h2M4.757 10c-.8-.344-1.5-.957-1.965-1.8a4.4 4.4 0 0 1-.42-3.161c.98.774 2.348.908 3.478.225S7.554 3.275 7.402 2A4.07 4.07 0 0 1 9.81 3.96c.205.372.35.763.439 1.16"></svg:path><svg:path d="M17.446 9.504h.023c2.485 0 4.26 1.956 4.284 4.056c0 3-2.844 4.32-4.284 4.2m-.023-8.256q.023-.234.023-.475c-.023-2.669-2.22-5.027-5.16-5.027c-2.76 0-5.014 1.927-5.256 4.6m10.393.902c-.102 1.077-.457 1.896-1.177 2.76M7.053 8.602C4.516 8.83 2.829 10.86 2.769 12.9c-.18 2.34 1.56 3.78 3.004 4.416c3.476 1.464 7.016.384 8.18-1.476c.516-1.02-.056-2.303-1.284-2.61c-.84-.21-2.28.27-2.322 1.782m-3.294-6.41c.158-.015.354-.022.516-.022c1.2.022 2.064.444 2.784.924"></svg:path></svg:g>`,
})
export class HugeiconsMoonCloudFastWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
