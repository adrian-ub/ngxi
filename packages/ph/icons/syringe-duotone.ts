import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSyringeDuotoneIcon],svg[ph-syringe-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m196 116l-89.66 89.66a8 8 0 0 1-5.65 2.34H48v-52.69a8 8 0 0 1 2.34-5.65L140 60Z" opacity=".2"></svg:path><svg:path d="m237.66 66.34l-48-48a8 8 0 0 0-11.32 11.32L196.69 48L168 76.69l-34.34-34.35a8 8 0 0 0-11.32 11.32l6.35 6.34l-84 84A15.86 15.86 0 0 0 40 155.31v49.38l-21.66 21.65a8 8 0 0 0 11.32 11.32L51.31 216h49.38a15.86 15.86 0 0 0 11.31-4.69l84-84l6.34 6.35a8 8 0 0 0 11.32-11.32L179.31 88L208 59.31l18.34 18.35a8 8 0 0 0 11.32-11.32M100.69 200H56v-44.69l18-18l20.34 20.35a8 8 0 0 0 11.32-11.32L85.31 126L98 113.31l20.34 20.35a8 8 0 0 0 11.32-11.32L109.31 102L140 71.31L184.69 116Z"></svg:path></svg:g>`,
})
export class PhSyringeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
