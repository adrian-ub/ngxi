import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTelevisionPlayCircleFilledIcon],svg[pepicons-pop-television-play-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopTelevisionPlayCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7 11v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1m-2 7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3z"></svg:path><svg:path d="M12.875 8.78a1 1 0 0 1-.156-1.405l2-2.5a1 1 0 0 1 1.562 1.25l-2 2.5a1 1 0 0 1-1.406.156"></svg:path><svg:path d="M13.125 8.78a1 1 0 0 0 .156-1.405l-2-2.5a1 1 0 1 0-1.562 1.25l2 2.5a1 1 0 0 0 1.406.156M15 14.5l-3.25 2v-4z"></svg:path><svg:path d="M15.5 14.5a.5.5 0 0 1-.238.426l-3.25 2a.5.5 0 0 1-.762-.426v-4a.5.5 0 0 1 .762-.426l3.25 2a.5.5 0 0 1 .238.426m-3.25-1.105v2.21l1.796-1.105z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopTelevisionPlayCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopTelevisionPlayCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
