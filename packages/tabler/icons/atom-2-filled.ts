import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAtom2FilledIcon],svg[tabler-atom-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8m0 12a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L11 21a1 1 0 0 1 1-1M3 8a1 1 0 0 1 .993.883L4 9.01a1 1 0 0 1-1.993.117L2 9a1 1 0 0 1 1-1m18 0a1 1 0 0 1 .993.883L22 9.01a1 1 0 0 1-1.993.117L20 9a1 1 0 0 1 1-1M2.89 12.006a1 1 0 0 1 1.104.884a8 8 0 0 0 4.444 6.311A1 1 0 1 1 7.562 21a10 10 0 0 1-5.556-7.89a1 1 0 0 1 .884-1.103zM20.993 12l.117.006a1 1 0 0 1 .884 1.104a10 10 0 0 1-5.556 7.889a1 1 0 1 1-.876-1.798a8 8 0 0 0 4.444-6.31a1 1 0 0 1 .987-.891M5.567 4.226a10 10 0 0 1 12.666 0a1 1 0 1 1-1.266 1.548a8 8 0 0 0-10.134 0a1 1 0 1 1-1.266-1.548"></svg:path>`,
})
export class TablerAtom2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
