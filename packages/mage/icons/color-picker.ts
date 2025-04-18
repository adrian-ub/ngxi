import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageColorPickerIcon],svg[mage-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.527 11.46l-7.994 7.964a1.87 1.87 0 0 1-2.303.262l-1.235 1.229a1.114 1.114 0 0 1-1.591 0l-.319-.347a1.116 1.116 0 0 1 0-1.595l1.217-1.22a1.88 1.88 0 0 1 .262-2.316l7.947-7.964z"></svg:path><svg:path d="M18.792 11.797a1.41 1.41 0 0 1-1.985 0l-4.68-4.643a1.418 1.418 0 0 1 .455-2.296a1.39 1.39 0 0 1 1.53.308l.57.562l1.845-2.223a2.805 2.805 0 0 1 3.9.07a2.82 2.82 0 0 1 .068 3.907L18.23 9.237l.562.572a1.397 1.397 0 0 1 0 1.988"></svg:path></svg:g>`,
})
export class MageColorPickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
