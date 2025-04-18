import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[academiconsCrossrefIcon],svg[academicons-crossref-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M310.362 40L25.168 134.018l192.067 65.984l93.127-30.67ZM9.638 139.13v131.969l192.034-65.985Zm207.597 71.096L25.195 276.21l77.543 25.536l192.067-65.957zm93.127 30.675l-192.066 65.985l192.066 65.985zm-207.624 71.097l-93.1 30.67V472l285.167-94.017Z"></svg:path>`,
})
export class AcademiconsCrossrefIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
