import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSateliteIcon],svg[cil-satelite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 496h480V16H16Zm448-32h-25.373l-104-104l54.912-54.911L464 379.55ZM48 48h416v286.3l-74.461-74.461L312 337.373l-112-112l-152 152Zm0 374.627l152-152L393.373 464H48Z"></svg:path><svg:path fill="currentColor" d="M120 80H80v40a40 40 0 0 0 40-40m-40 83.661V196.6A152.47 152.47 0 0 0 196.6 80h-32.939A120.47 120.47 0 0 1 80 163.661"></svg:path>`,
})
export class CilSateliteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
