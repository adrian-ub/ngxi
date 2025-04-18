import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVolcanoIcon],svg[streamline-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.45 13.45s-3.97-1.984-3.97-4.96H4.52c0 2.977-3.97 4.961-3.97 4.961m9.923-7.939a1.984 1.984 0 1 0-1.23-3.542a2.48 2.48 0 0 0-4.485 0a1.984 1.984 0 1 0-1.23 3.542m1.984-.992v3.969M8.488 4.52v3.969"></svg:path>`,
})
export class StreamlineVolcanoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
