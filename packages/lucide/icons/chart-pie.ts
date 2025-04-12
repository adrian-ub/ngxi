import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChartPieIcon],svg[lucide-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></svg:path><svg:path d="M21.21 15.89A10 10 0 1 1 8 2.83"></svg:path></svg:g>`
})
export class LucideChartPieIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
