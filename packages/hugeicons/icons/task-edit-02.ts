import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTaskEdit02Icon],svg[hugeicons-task-edit-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.014 16.003h4m-4-4.998h8m-5 10.995h1M7.51 22c-1.17-.025-1.97-.1-2.746-.325c-1.05-.275-1.815-1.2-2.04-2.499c-.285-1.224-.185-4.247-.21-7.846c.002-2.791-.125-5.472.325-6.996c.275-.5.5-2.324 4.225-2.3c.625-.024 7.25-.074 8.3.026c3.5.075 3.85 1.874 4.05 3.573c.127 1.25.1 3.248.1 5.372M7.014 2.01c.3 1.624.275 2.674 1.375 2.923c.475.075 1.56.073 2.725.075c1.04.002 2.1.012 2.575-.1c1.175-.274 1.05-1.724 1.35-2.898m3.24 12.369c-1.375 1.4-4.023 3.898-4.023 4.073c-.213.297-.4.9-.524 1.75c-.157.787-.345 1.473-.125 1.673s1.047.032 1.923-.15c.7-.075 1.35-.325 1.674-.574c.475-.42 3.698-3.674 4.072-4.098c.275-.375.3-1.075.06-1.5c-.134-.3-.984-1.1-1.259-1.324a1.52 1.52 0 0 0-1.799.15" color="currentColor"></svg:path>`,
})
export class HugeiconsTaskEdit02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
