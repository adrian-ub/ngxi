import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOrientationPortraitIcon],svg[streamline-orientation-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 12.5v-11a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1"></svg:path><svg:path d="M8.547 5.488a1.228 1.228 0 1 0 0-2.457a1.228 1.228 0 0 0 0 2.457M2 7.807q.522-.089 1.053-.087c1.224-.025 2.419.338 3.37 1.025c1.542 1.111 2.124 3.038 2.124 4.755"></svg:path><svg:path d="M12 9.37a7.3 7.3 0 0 0-2.102-.306a7.4 7.4 0 0 0-2.632.479"></svg:path></svg:g>`,
})
export class StreamlineOrientationPortraitIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
