import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumWavePulse1Icon],svg[circum-wave-pulse-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.974 18a1.45 1.45 0 0 1-1.259-.972l-1.843-4.145c-.115-.26-.262-.378-.349-.378H2.562a.5.5 0 1 1 0-1h2.961a1.44 1.44 0 0 1 1.263.972l1.839 4.145c.116.261.258.378.349.378c.088 0 .229-.113.344-.368L13.7 6.956A1.42 1.42 0 0 1 14.958 6a1.45 1.45 0 0 1 1.26.975l1.839 4.151c.11.249.259.379.349.379h3.028a.5.5 0 0 1 0 1H18.41a1.44 1.44 0 0 1-1.263-.975l-1.839-4.151c-.116-.261-.259-.378-.35-.379c-.088 0-.229.114-.344.368l-4.385 9.676A1.44 1.44 0 0 1 8.974 18"></svg:path>`,
})
export class CircumWavePulse1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
