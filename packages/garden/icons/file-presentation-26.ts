import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFilePresentation26Icon],svg[garden-file-presentation-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.41 0H2C.9 0 0 .9 0 2v22c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.58zM6 14.5V17H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5V14H6.5c-.28 0-.5.22-.5.5M16.5 21h-9a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5M15 7a2 2 0 0 1-2-2V1l6 6z"></svg:path>`,
})
export class GardenFilePresentation26Icon {
  readonly viewBox = input("0 0 20 26")
  readonly width = input("0.77em")
  readonly height = input("1em")
}
