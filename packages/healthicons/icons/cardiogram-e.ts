import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCardiogramEIcon],svg[healthicons-cardiogram-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h3a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V23h8.171l1.47-2.466l1.815 6.661L21.49 22h4.278a1 1 0 1 0 0-2H20.51l-2.177 2.805l-2-7.339L13.035 21H6v-9a3 3 0 0 1 3-3zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-4 22a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path d="M36 18a3 3 0 1 1 6 0v3h-6zm3 24l-3-4V23h6v15z"></svg:path></svg:g>`,
})
export class HealthiconsCardiogramEIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
