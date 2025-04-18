import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTaskDone02Icon],svg[hugeicons-task-done-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 13V9.368c0-3.473 0-5.21-1.025-6.289S15.8 2 12.5 2h-3C6.2 2 4.55 2 3.525 3.08C2.5 4.157 2.5 5.894 2.5 9.367v5.264c0 3.473 0 5.21 1.025 6.289S6.2 22 9.5 22H11m2.5-2s1 0 2 2c0 0 3.177-5 6-6"></svg:path><svg:path d="m7 2l.082.493c.2 1.197.3 1.796.72 2.152C8.22 5 8.827 5 10.041 5h1.917c1.213 0 1.82 0 2.24-.355c.42-.356.52-.955.719-2.152L15 2M7 16h4m-4-5h8"></svg:path></svg:g>`,
})
export class HugeiconsTaskDone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
