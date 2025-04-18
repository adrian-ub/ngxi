import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMinitonguewinkIcon],svg[whh-minitonguewink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M951 731q0 122-75 207.5T695 1024t-181-85.5T439 731H73q-30 0-51.5-21T0 658.5t21.5-52T73 585h878q30 0 51.5 21.5t21.5 52t-21.5 51.5t-51.5 21m-366 0q0 61 32 104t77.5 43t78-43T805 731zm293-438H658q-30 0-51.5-21.5t-21.5-52t21.5-52T658 146h220q30 0 51.5 21.5t21.5 52t-21.5 52T878 293m-658.5 73Q159 366 116 312.5T73 183t43-129.5T219.5 0T323 53.5T366 183t-43 129.5T219.5 366"></svg:path>`,
})
export class WhhMinitonguewinkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
