import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrain02Icon],svg[hugeicons-train-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 10c0 4.418-3.582 10-8 10s-8-5.582-8-10a8 8 0 1 1 16 0"></svg:path><svg:path d="M8 18c.939-1.22 2.382-2 4-2s3.061.78 4 2M9.249 9.604A9.8 9.8 0 0 0 12 10c.966 0 1.893-.145 2.751-.396c1.16-.34 1.668-.994.844-2.016c-1.705-2.117-5.485-2.117-7.19 0c-.824 1.022-.315 1.676.844 2.016M5 19l-2 3m16-3l2 3"></svg:path></svg:g>`,
})
export class HugeiconsTrain02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
