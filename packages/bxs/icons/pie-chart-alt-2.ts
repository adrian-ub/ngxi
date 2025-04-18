import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsPieChartAlt2Icon],svg[bxs-pie-chart-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.051V11h8.949c-.47-4.717-4.232-8.479-8.949-8.949m4.969 17.953c2.189-1.637 3.694-4.14 3.98-7.004h-8.183z"></svg:path><svg:path fill="currentColor" d="M11 12V2.051C5.954 2.555 2 6.824 2 12c0 5.514 4.486 10 10 10a9.9 9.9 0 0 0 4.255-.964s-5.253-8.915-5.254-9.031z"></svg:path>`,
})
export class BxsPieChartAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
