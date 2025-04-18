import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPlaylist16Icon],svg[qlementine-icons-playlist-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.5A.5.5 0 0 1 .5 1h13a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 .5 5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5M8 15c1.1 0 2-.672 2-1.5V7.71l5-1.43v4.91a2.5 2.5 0 0 0-1-.201c-1.1 0-2 .672-2 1.5s.895 1.5 2 1.5s2-.672 2-1.5v-7.17a1 1 0 0 0-1.27-.962l-5 1.43a1 1 0 0 0-.725.962v5.45a2.5 2.5 0 0 0-1-.201c-1.1 0-2 .672-2 1.5s.895 1.5 2 1.5z"></svg:path>`,
})
export class QlementineIconsPlaylist16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
