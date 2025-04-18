import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDiamondsFourThinIcon],svg[ph-diamonds-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M125.17 106.83a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66ZM128 29.66L162.34 64L128 98.34L93.66 64Zm2.83 119.51a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66ZM128 226.34L93.66 192L128 157.66L162.34 192Zm106.83-101.17l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M192 162.34L157.66 128L192 93.66L226.34 128Zm-85.17-37.17l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M64 162.34L29.66 128L64 93.66L98.34 128Z"></svg:path>`,
})
export class PhDiamondsFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
