import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMistplayIcon],svg[arcticons-mistplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.564 36.83a5.58 5.58 0 0 1-5.578 5.578h0a5.58 5.58 0 0 1-5.578-5.579h0a5.58 5.58 0 0 1 5.578-5.578h0a5.58 5.58 0 0 1 5.578 5.578m-.04-18.122a4.637 4.637 0 0 1-4.637 4.637h0a4.637 4.637 0 0 1-4.636-4.637h0a4.637 4.637 0 0 1 4.636-4.636h0a4.637 4.637 0 0 1 4.637 4.636m-13.496-8.418a3.264 3.264 0 1 1-6.528 0a3.264 3.264 0 0 1 6.528 0M34.27 8.857a3.264 3.264 0 1 1-6.527 0h0a3.264 3.264 0 0 1 3.264-3.264h0a3.264 3.264 0 0 1 3.264 3.264m8.229 8.541a3.264 3.264 0 1 1-6.528 0a3.264 3.264 0 0 1 6.528 0m-7.618 9.596a3.591 3.591 0 1 1-7.183 0a3.591 3.591 0 0 1 7.183 0"></svg:path>`,
})
export class ArcticonsMistplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
