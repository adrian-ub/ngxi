import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsFloobitsIcon],svg[file-icons-floobits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M436.363 327.866c-33.516-19.322-33.516-67.89 0-87.211C469.878 221.333 512 245.616 512 284.26s-42.122 62.928-75.637 43.605M25.137 267.018c-33.516-19.322-33.516-67.89 0-87.212s75.637 4.962 75.637 43.606s-42.122 62.928-75.637 43.606m196.731-119.326h97.61L441.55 425.088h-97.92zM75.703 86.912h97.587L295.208 364.14h-97.84z"></svg:path>`,
})
export class FileIconsFloobitsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
