import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFileImage26Icon],svg[garden-file-image-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.41 0H2a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.58zM8.5 10a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 10m6.968 10H4.473a.475.475 0 0 1-.377-.76l2.31-3.088a.47.47 0 0 1 .672-.086l1.83 1.468l2.825-3.346a.53.53 0 0 1 .844.046l3.33 4.933a.533.533 0 0 1-.44.833zM15 7a2 2 0 0 1-2-2V1l6 6z"></svg:path>`,
})
export class GardenFileImage26Icon {
  readonly viewBox = input("0 0 20 26")
  readonly width = input("0.77em")
  readonly height = input("1em")
}
