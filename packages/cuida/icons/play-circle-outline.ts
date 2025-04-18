import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaPlayCircleOutlineIcon],svg[cuida-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="play-circle-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path d="M8 14.091v-4.22c0-1.874 1.954-3.108 3.646-2.302l4.22 2.01c1.898.903 1.949 3.585.087 4.56l-4.22 2.21C10.035 17.24 8 16.009 8 14.092Zm2.805.487a.55.55 0 0 1-.805-.487v-4.22a.55.55 0 0 1 .787-.496l4.22 2.009a.55.55 0 0 1 .018.984z"></svg:path></svg:g></svg:g>`,
})
export class CuidaPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
