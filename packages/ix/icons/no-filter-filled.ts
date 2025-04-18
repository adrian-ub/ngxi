import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNoFilterFilledIcon],svg[ix-no-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m310.109 279.878l142.31 142.309l-30.17 30.17l-139.292-139.293l-5.623 6.874v149.334h-42.667V319.938h-.448L42.667 85.272L64 85.27l25.752-25.75zM175.841 85.271h293.493l-132.072 161.42z"></svg:path>`,
})
export class IxNoFilterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
