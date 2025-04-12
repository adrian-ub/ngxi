import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIterationCcwIcon],svg[lucide-iteration-ccw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8h8"></svg:path><svg:path d="m16 14l4 4l-4 4"></svg:path></svg:g>`
})
export class LucideIterationCcwIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
