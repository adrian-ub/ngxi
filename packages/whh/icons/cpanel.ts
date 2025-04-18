import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCpanelIcon],svg[whh-cpanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q0 27-19 45.5T960 576H576v384q0 27-18.5 45.5T512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257m-896 0q0 142 91.5 248.5T448 890V134q-137 23-228.5 129.5T128 512m448-378v314h314q-20-121-107-207.5T576 134"></svg:path>`,
})
export class WhhCpanelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
