import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteChartPie2LineIcon],svg[mingcute-chart-pie-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1c0-5.523-4.477-10-10-10m1 9V4.062A8.004 8.004 0 0 1 19.938 11zM8.89 4.627a1 1 0 0 0-.78-1.842A10 10 0 0 0 2 12c0 5.523 4.477 10 10 10c4.145 0 7.699-2.522 9.215-6.11a1 1 0 1 0-1.842-.78A8.002 8.002 0 0 1 4 12a8 8 0 0 1 4.89-7.373"></svg:path></svg:g>`,
})
export class MingcuteChartPie2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
