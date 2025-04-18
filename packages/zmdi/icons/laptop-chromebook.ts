import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLaptopChromebookIcon],svg[zmdi-laptop-chromebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 320h43v43H0v-43h43V0h426zm-170 0v-21h-86v21zm128-64V43H85v213z"></svg:path>`,
})
export class ZmdiLaptopChromebookIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
