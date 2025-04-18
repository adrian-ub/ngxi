import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayCard3FilledIcon],svg[tabler-play-card-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2M12.5 8H10a1 1 0 1 0 0 2h2.5a.5.5 0 0 1 .09.992L12.5 11H11c-1.287 0-1.332 1.864-.133 1.993L11 13h1.5a.5.5 0 1 1 0 1H10a1 1 0 0 0 0 2h2.5a2.5 2.5 0 0 0 2.5-2.5l-.005-.164a2.5 2.5 0 0 0-.477-1.312L14.499 12l.019-.024A2.5 2.5 0 0 0 12.5 8M7.01 4H7a1 1 0 0 0-.117 1.993L7.01 6a1 1 0 1 0 0-2"></svg:path>`,
})
export class TablerPlayCard3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
