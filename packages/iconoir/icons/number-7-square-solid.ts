import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNumber7SquareSolidIcon],svg[iconoir-number-7-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm5.9 5a.75.75 0 0 0 0 1.5h3.35c-.3.378-.637.828-.974 1.334C10.851 11.621 9.75 13.774 9.75 16a.75.75 0 0 0 1.5 0c0-1.775.899-3.621 1.874-5.084a18.4 18.4 0 0 1 1.752-2.225l.118-.124l.03-.03l.006-.006a.75.75 0 0 0-.53-1.281z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirNumber7SquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
