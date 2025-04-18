import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRampRightIcon],svg[material-symbols-ramp-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21v-6.3q-.825 1.125-1.975 2.138T6.45 18.725L5 17.275q.75-.425 1.775-1.175t1.963-1.787t1.6-2.375T11 9V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825V21z"></svg:path>`,
})
export class MaterialSymbolsRampRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
