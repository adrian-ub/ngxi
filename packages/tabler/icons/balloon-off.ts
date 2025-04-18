import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBalloonOffIcon],svg[tabler-balloon-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 8a2 2 0 0 0-2-2"></svg:path><svg:path d="M7.762 3.753A6 6 0 0 1 18 8c0 1.847-.37 3.564-1.007 4.993m-1.59 2.42C14.436 16.413 13.263 17 12 17c-3.314 0-6-4.03-6-9c0-.593.086-1.166.246-1.707M12 17v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBalloonOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
