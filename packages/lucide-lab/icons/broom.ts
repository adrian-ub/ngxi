import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBroomIcon],svg[lucide-lab-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 11l9-9m-7.4 10.6c.8.8.9 2.1.2 3L10 22l-8-8l6.4-4.8c.9-.7 2.2-.6 3 .2Zm-7.8-2.2l6.8 6.8M5 17l1.4-1.4"></svg:path>`,
})
export class LucideLabBroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
