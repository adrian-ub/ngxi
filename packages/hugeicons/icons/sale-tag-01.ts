import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaleTag01Icon],svg[hugeicons-sale-tag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.986 3.7c2.797 3.095 7.41-3.584 10.14-1.16c1.57 1.394 1.073 4.474-.965 6.48m-2.371 4.964c.018-.335.111-.947-.397-1.412m0 0a1.9 1.9 0 0 0-.666-.377c-1.048-.37-2.336.867-1.425 2c.49.608.867.795.832 1.486c-.025.486-.503.994-1.132 1.188c-.547.168-1.15-.055-1.531-.481c-.466-.52-.42-1.011-.423-1.225m4.345-2.59l.574-.575m-4.455 4.455l-.545.545"></svg:path><svg:path d="M18.273 6.633c.925.178 1.133.762 1.409 2.384c.249 1.46.319 3.213.319 3.96a1.32 1.32 0 0 1-.319.74c-1.935 2.028-5.776 5.858-7.714 7.76c-.76.68-1.908.695-2.716.071c-1.653-1.487-3.241-3.168-4.797-4.686c-.625-.805-.61-1.95.07-2.708c2.051-2.127 5.762-5.768 7.856-7.78c.21-.18.468-.292.743-.317c.47 0 1.276.063 2.062.108"></svg:path></svg:g>`,
})
export class HugeiconsSaleTag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
