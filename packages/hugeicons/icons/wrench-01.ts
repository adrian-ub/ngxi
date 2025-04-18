import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWrench01Icon],svg[hugeicons-wrench-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.358 13.357c-1.19 1.189-3.427 1.143-6.859 1.143a4 4 0 0 1-3.999-4c0-3.43-.046-5.67 1.143-6.859s1.715-1.14 6.984-1.14a.57.57 0 0 1 .406.973L15.32 6.187a1.763 1.763 0 1 0 2.492 2.494l2.714-2.712a.57.57 0 0 1 .974.405c0 5.268.048 5.794-1.142 6.983"></svg:path><svg:path d="m13.5 14.5l-6.172 6.172a2.829 2.829 0 0 1-4-4L9.5 10.5m-3.991 8H5.5"></svg:path></svg:g>`,
})
export class HugeiconsWrench01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
