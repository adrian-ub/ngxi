import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitChartPieIcon],svg[uit-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m.5 1.03c4.56.252 8.215 3.923 8.46 8.486H12.5zM12 21c-4.963 0-9-4.037-9-9c0-4.794 3.77-8.713 8.5-8.975V12a.5.5 0 0 0 .067.25l4.488 7.774A8.9 8.9 0 0 1 12 21m4.917-1.482l-4.042-7.002h8.076a9 9 0 0 1-4.034 7.002"></svg:path>`,
})
export class UitChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
