import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUniteSquareDuotoneIcon],svg[ph-unite-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v120H96v-56H40V40h120v56Z" opacity=".2"></svg:path><svg:path d="M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-8 120H104v-48a8 8 0 0 0-8-8H48V48h104v48a8 8 0 0 0 8 8h48Z"></svg:path></svg:g>`,
})
export class PhUniteSquareDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
