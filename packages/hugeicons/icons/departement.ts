import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDepartementIcon],svg[hugeicons-departement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.883V9.128c0-1.135-.001-1.703-.277-2.179s-.769-.754-1.754-1.31l-5.025-2.835C12.994 2.268 12.519 2 12 2s-.994.268-1.944.804L5.031 5.64c-.985.555-1.478.833-1.754 1.31c-.276.475-.276 1.043-.277 2.178v4.755c0 3.826 0 5.74 1.172 6.928C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.189C21 19.623 21 17.71 21 13.883M10 13H8m8 0h-2m-4-4H8m2 8H8m8-8h-2m2 8h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsDepartementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
