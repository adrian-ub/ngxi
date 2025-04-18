import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVrHeadset1Icon],svg[streamline-vr-headset-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.286 13.5v-2.602a5.571 5.571 0 1 1 7.612-7.612M8.857 13.5v-2.32h1.857a.93.93 0 0 0 .929-.929V7.93M5.606 5.607H.518"></svg:path><svg:path d="M5.607 5.607A2.32 2.32 0 0 1 7.93 3.286h4.57a1 1 0 0 1 1 1v2.643a1 1 0 0 1-1 1H7.929a2.32 2.32 0 0 1-2.322-2.322m3.714-2.321v4.643"></svg:path></svg:g>`,
})
export class StreamlineVrHeadset1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
