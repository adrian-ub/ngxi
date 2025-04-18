import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsP4Icon],svg[file-icons-p4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472.667 417.35v-95.248h38.952v-54.667h-38.952V61.102H406l-161.333 207v54H410v95.247H92V278.102c121.35 3.198 167.824-45.821 170.788-114.586c3.509-81.401-42.069-102.414-106.789-102.414h-137v356.247H0v33.55h512v-33.55zM303.528 267.434L410 133.102v134.333zM92 111.102s95.613-11.625 95.613 45.648c0 81.36-95.613 71.608-95.613 71.608z"></svg:path>`,
})
export class FileIconsP4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
