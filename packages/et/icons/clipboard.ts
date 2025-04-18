import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etClipboardIcon],svg[et-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.5 32h25c.869 0 1.5-.631 1.5-1.5v-28c0-.869-.631-1.5-1.5-1.5h-4a.5.5 0 0 0 0 1h4c.313 0 .5.187.5.5v28c0 .313-.187.5-.5.5h-25c-.313 0-.5-.187-.5-.5v-28c0-.313.187-.5.5-.5h4a.5.5 0 0 0 0-1h-4C.631 1 0 1.631 0 2.5v28c0 .869.631 1.5 1.5 1.5"></svg:path><svg:path d="M5.5 5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v24a.5.5 0 0 0 .5.5h21a.5.5 0 0 0 .5-.5v-24a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H24v23H4V5z"></svg:path><svg:path d="M9 7h10c1.215 0 2-.785 2-2V.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5V5c0 1.215.785 2 2 2M8 1h12v4c0 .664-.337 1-1 1H9c-.663 0-1-.336-1-1zm.5 15h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m0-4h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m0 8h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m0 4h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class EtClipboardIcon {
  readonly viewBox = input("0 0 28 32")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
