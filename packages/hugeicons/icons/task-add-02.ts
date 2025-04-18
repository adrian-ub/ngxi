import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTaskAdd02Icon],svg[hugeicons-task-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 22h-3c-3.3 0-4.95 0-5.975-1.08C2.5 19.843 2.5 18.106 2.5 14.633V9.368c0-3.473 0-5.21 1.025-6.289S6.2 2 9.5 2h3c3.3 0 4.95 0 5.975 1.08C19.5 4.157 19.5 5.894 19.5 9.367V11M18 15v7m3.5-3.5h-7"></svg:path><svg:path d="m7 2l.082.493c.2 1.197.3 1.796.72 2.152C8.22 5 8.827 5 10.041 5h1.917c1.213 0 1.82 0 2.24-.355c.42-.356.52-.955.719-2.152L15 2M7 16h4m-4-5h8"></svg:path></svg:g>`,
})
export class HugeiconsTaskAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
