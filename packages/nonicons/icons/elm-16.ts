import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsElm16Icon],svg[nonicons-elm-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.629 1.581L4.727 3.68h5.065l-2.099-2.1zm7.159 0l4.63 4.631V1.828a.247.247 0 0 0-.246-.247zM14.112 8L11.58 5.468L9.047 8l2.533 2.532zm-1.485 3.58l1.792 1.791V9.788zm.744 2.839L8 9.047L2.629 14.42zM1.581 13.37L6.953 8L1.58 2.629zM8 6.953L9.792 5.16H6.208zM.1 1.828C.1.874.874.1 1.828.1h12.344c.954 0 1.728.774 1.728 1.728v12.344c0 .954-.774 1.728-1.728 1.728H1.828A1.73 1.73 0 0 1 .1 14.172z"></svg:path>`,
})
export class NoniconsElm16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
