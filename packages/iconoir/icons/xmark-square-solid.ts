import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirXmarkSquareSolidIcon],svg[iconoir-xmark-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm6.809 7.098a.75.75 0 0 0-1.06 1.061L10.938 12l-1.59 1.591a.75.75 0 0 0 1.06 1.06L12 13.062l1.591 1.59a.75.75 0 0 0 1.06-1.06L13.062 12l1.59-1.591a.75.75 0 0 0-1.06-1.06L12 10.938z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirXmarkSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
