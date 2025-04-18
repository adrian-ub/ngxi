import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerYinYangFilledIcon],svg[tabler-yin-yang-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M8 5.072A8 8 0 0 0 12 20l.2-.005a4 4 0 0 0 0-7.99L12 12a4 4 0 0 1-.2-7.995L12 4a8 8 0 0 0-4 1.072M12 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path d="M12 14.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"></svg:path></svg:g>`,
})
export class TablerYinYangFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
