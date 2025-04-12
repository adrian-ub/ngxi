import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidChartPieIcon],svg[heroicons-solid-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 10a8 8 0 0 1 8-8v8h8a8 8 0 1 1-16 0"></svg:path><svg:path d="M12 2.252A8.01 8.01 0 0 1 17.748 8H12z"></svg:path></svg:g>`
})
export class HeroiconsSolidChartPieIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
