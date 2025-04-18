import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePetsAllowedIcon],svg[streamline-pets-allowed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.75 11.018v-7.59l1.254 1.004c.633.506 1.42.782 2.23.782H7L8.292 2.63a1.79 1.79 0 0 1 1.597-.987h.682v2.232l2.679.893v.893c0 .986-.8 1.785-1.786 1.785H9.68v3.572a1.34 1.34 0 1 1-2.679 0v-.447c0-.493-.4-.892-.893-.892H4.321c-.493 0-.892.4-.892.892v.447a1.34 1.34 0 1 1-2.679 0"></svg:path><svg:path d="M7.012 5.097c.175.717 1 2.195 2.895 2.375"></svg:path></svg:g>`,
})
export class StreamlinePetsAllowedIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
