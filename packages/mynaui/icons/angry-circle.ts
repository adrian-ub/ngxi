import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAngryCircleIcon],svg[mynaui-angry-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9 16c.85-.63 1.885-1 3-1s2.15.37 3 1M8 8l3 1.5m2 0L16 8m-6.5 2.5V10m5 .5V10"></svg:path></svg:g>`,
})
export class MynauiAngryCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
