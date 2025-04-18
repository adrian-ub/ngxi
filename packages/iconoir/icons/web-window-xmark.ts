import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWebWindowXmarkIcon],svg[iconoir-web-window-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 7h1"></svg:path><svg:path d="M2 17.714V6.286C2 5.023 2.995 4 4.222 4h15.556C21.005 4 22 5.023 22 6.286v11.428C22 18.977 21.005 20 19.778 20H4.222C2.995 20 2 18.977 2 17.714Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></svg:path></svg:g>`,
})
export class IconoirWebWindowXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
