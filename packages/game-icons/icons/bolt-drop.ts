import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBoltDropIcon],svg[game-icons-bolt-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 34.25C210.3 115.3 165.1 172.3 131.3 219.3C95.53 268.9 73 307 73 352s21.91 77.8 56 100.5c34.1 22.7 80.5 34.5 127 34.5s92.9-11.8 127-34.5S439 397 439 352s-22.5-83.1-58.3-132.7c-33.8-47-79-104-124.7-185.05M304 128l-46.8 134.4h117L178.7 471.3l59.2-159.2H130.5z"></svg:path>`,
})
export class GameIconsBoltDropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
