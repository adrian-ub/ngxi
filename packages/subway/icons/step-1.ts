import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayStep1Icon],svg[subway-step-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140.6 280.3H1v139.6h139.6zm186.2-139.7H187.2v279.3h139.6zM373.4 1v418.9H513V1zM1 513h512v-46.5H1z"></svg:path>`,
})
export class SubwayStep1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
