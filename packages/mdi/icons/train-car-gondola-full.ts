import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarGondolaFullIcon],svg[mdi-train-car-gondola-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10c-1.96-1.81-5.26-3-9-3s-7.04 1.19-9 3H1v7h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-7zm0 5h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3v-3h18z"></svg:path>`,
})
export class MdiTrainCarGondolaFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
