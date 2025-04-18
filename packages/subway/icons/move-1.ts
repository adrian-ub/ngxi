import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMove1Icon],svg[subway-move-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.7 213.3h42.7V106.7h85.3L256 0L149.3 106.7h85.3v106.6zM512 256L405.3 149.3v85.3H298.7v42.7h106.7v85.3zm-298.7-21.3H106.7v-85.3L0 256l106.7 106.7v-85.3h106.7v-42.7zm64 64h-42.7v106.7h-85.3L256 512l106.7-106.7h-85.3V298.7z"></svg:path>`,
})
export class SubwayMove1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
