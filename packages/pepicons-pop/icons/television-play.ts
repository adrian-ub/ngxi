import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTelevisionPlayIcon],svg[pepicons-pop-television-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 8v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m-2 7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3z"></svg:path><svg:path d="M9.875 5.78a1 1 0 0 1-.156-1.405l2-2.5a1 1 0 0 1 1.562 1.25l-2 2.5a1 1 0 0 1-1.406.156"></svg:path><svg:path d="M10.125 5.78a1 1 0 0 0 .156-1.405l-2-2.5a1 1 0 1 0-1.562 1.25l2 2.5a1 1 0 0 0 1.406.156M12 11.5l-3.25 2v-4z"></svg:path><svg:path d="M12.5 11.5a.5.5 0 0 1-.238.426l-3.25 2a.5.5 0 0 1-.762-.426v-4a.5.5 0 0 1 .762-.426l3.25 2a.5.5 0 0 1 .238.426m-3.25-1.105v2.21l1.796-1.105z"></svg:path></svg:g>`,
})
export class PepiconsPopTelevisionPlayIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
