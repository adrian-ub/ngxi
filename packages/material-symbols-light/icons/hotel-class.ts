import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHotelClassIcon],svg[material-symbols-light-hotel-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.508 14.116l3.473-3l1.442.134l-3.746 3.229l1.108 4.887l-1.224-.743zM13.6 8.219l-.973-2.296l.554-1.365l1.588 3.77zM5.825 18.923l1.24-5.313l-4.123-3.572l5.431-.47l2.127-5.01l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313l-4.675-2.821z"></svg:path>`,
})
export class MaterialSymbolsLightHotelClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
