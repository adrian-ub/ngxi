import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons9Icon],svg[healthicons-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.032 34a4.03 4.03 0 0 1-3.804-2.67a2 2 0 1 0-3.77 1.34A8.03 8.03 0 0 0 22.033 38h3.936C30.394 38 34 34.428 34 30V18c0-4.428-3.606-8-8.032-8h-3.936C17.606 10 14 13.572 14 18s3.606 8 8.032 8h3.936A8 8 0 0 0 30 24.92V30c0 2.2-1.795 4-4.032 4zM30 18c0 2.2-1.795 4-4.032 4h-3.936C19.795 22 18 20.2 18 18s1.795-4 4.032-4h3.936C28.205 14 30 15.8 30 18" clip-rule="evenodd"></svg:path>`,
})
export class Healthicons9Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
