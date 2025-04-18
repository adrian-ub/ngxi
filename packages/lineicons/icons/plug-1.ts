import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlug1Icon],svg[lineicons-plug-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 2.75a.75.75 0 0 1 1.5 0v2.983h3.5a.75.75 0 0 1 0 1.5H19v5a6.5 6.5 0 0 1-5.75 6.457v2.56a.75.75 0 0 1-1.5 0v-2.56A6.5 6.5 0 0 1 6 12.233v-5h-.5a.75.75 0 0 1 0-1.5H9V2.75a.75.75 0 0 1 1.5 0v2.983h4zm-7 4.483v5a5 5 0 0 0 10 0v-5z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPlug1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
