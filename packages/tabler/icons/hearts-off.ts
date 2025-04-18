import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartsOffIcon],svg[tabler-hearts-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.017 18L12 20l-7.5-7.428a5 5 0 0 1 .49-7.586m3.01-1a5 5 0 0 1 4 2.018a5 5 0 0 1 8.153 5.784"></svg:path><svg:path d="M11.814 11.814a2.81 2.81 0 0 0-.007 3.948L15.989 20l2.01-2.021m1.977-1.99l.211-.212a2.81 2.81 0 0 0 0-3.948a2.747 2.747 0 0 0-3.91-.007l-.283.178M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHeartsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
