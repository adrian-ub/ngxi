import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClockArrowUpIcon],svg[lucide-clock-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.228 21.925a10 10 0 1 1 8.766-9.587"></svg:path><svg:path d="M12 6v6l1.562.781M14 18l4-4l4 4m-4 4v-8"></svg:path></svg:g>`
})
export class LucideClockArrowUpIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
