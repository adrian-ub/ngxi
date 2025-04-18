import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPaperTrayIcon],svg[game-icons-paper-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M87.902 40.998L42.25 391.002h138.566l32 48h86.368l32-48h138.568L424.098 40.998h-98.536l-16 32H202.587l-16.967-32zm-46.904 368v78.004h430.004v-78.004H340.816l-32 48H203.184l-32-48z"></svg:path>`,
})
export class GameIconsPaperTrayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
