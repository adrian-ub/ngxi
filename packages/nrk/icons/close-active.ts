import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCloseActiveIcon],svg[nrk-close-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m-1.414-11l-3.293 3.293l1.414 1.414L12 13.414l3.293 3.293l1.414-1.414L13.414 12l3.293-3.293l-1.414-1.414L12 10.586L8.707 7.293L7.293 8.707z" clip-rule="evenodd"></svg:path>`,
})
export class NrkCloseActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
