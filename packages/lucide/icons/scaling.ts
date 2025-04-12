import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScalingIcon],svg[lucide-scaling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></svg:path><svg:path d="M14 15H9v-5m7-7h5v5m0-5L9 15"></svg:path></svg:g>`
})
export class LucideScalingIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
