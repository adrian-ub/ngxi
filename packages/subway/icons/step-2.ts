import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayStep2Icon],svg[subway-step-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325.8 279.3H186.2v139.6h139.6zm46.6-139.7v279.3H512V139.6zM139.6 0H0v418.9h139.6zM0 512h512v-46.5H0z"></svg:path>`,
})
export class SubwayStep2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
