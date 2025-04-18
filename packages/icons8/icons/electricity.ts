import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ElectricityIcon],svg[icons8-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.875 4l-6.906 7.313l-.845.906l1.063.624l7.187 4.344L12 24.563V20h-2v8h8v-2h-4.563l8.282-8.28l.905-.907l-1.094-.657l-7.25-4.375l6.033-6.405z"></svg:path>`,
})
export class Icons8ElectricityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
