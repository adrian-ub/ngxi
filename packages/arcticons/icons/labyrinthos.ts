import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLabyrinthosIcon],svg[arcticons-labyrinthos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.595 43.5l-7.193-19.229a10.629 10.629 0 1 0-10.804 0L11.405 43.5ZM24 39.852v-21m0 17.259h1.938M24 33.195h2.858M24 39.027h2.858"></svg:path><svg:circle cx="22.033" cy="15.701" r="3.716" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="25.967" cy="15.701" r="3.716" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.676 12.053a2.806 2.806 0 0 0-5.352 0"></svg:path>`,
})
export class ArcticonsLabyrinthosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
