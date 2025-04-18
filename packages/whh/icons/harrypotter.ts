import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHarrypotterIcon],svg[whh-harrypotter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 886H27q-43-40-15-66L472 15q17-15 41-15t40 15l460 805q29 27-13 66M82 818h239q-50-40-79.5-97T207 598zm193-239.5q0 89.5 58.5 156T479 814V344q-87 12-145.5 78.5t-58.5 156M375 305q49-25 104-31V123zm173-180v149q54 6 102 31zm0 219v470q87-13 145.5-79.5t58.5-156t-58.5-156T548 344m271 256q-4 65-34 121.5T706 818h238z"></svg:path>`,
})
export class WhhHarrypotterIcon {
  readonly viewBox = input("0 0 1025 886")
  readonly width = input("1.16em")
  readonly height = input("1em")
}
