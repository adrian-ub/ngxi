import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons8NegativeIcon],svg[healthicons-8-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthicons8Negative0)"><svg:path d="M30 18c0-2.2-1.795-4-4.032-4h-3.936C19.795 14 18 15.8 18 18s1.795 4 4.032 4h3.936C28.205 22 30 20.2 30 18m-4.032 8h-3.936C19.795 26 18 27.8 18 30s1.795 4 4.032 4h3.936C28.205 34 30 32.2 30 30s-1.795-4-4.032-4"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM14 18a7.96 7.96 0 0 0 2.72 6A7.96 7.96 0 0 0 14 30c0 4.428 3.606 8 8.032 8h3.936C30.394 38 34 34.428 34 30a7.96 7.96 0 0 0-2.72-6A7.96 7.96 0 0 0 34 18c0-4.428-3.606-8-8.032-8h-3.936C17.606 10 14 13.572 14 18" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthicons8Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class Healthicons8NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
