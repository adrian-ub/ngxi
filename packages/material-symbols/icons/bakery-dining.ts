import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBakeryDiningIcon],svg[material-symbols-bakery-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.875 17.7l-2.475-.85l1.95-5.375l2.125 4.375q.35.675-.3 1.375t-1.3.475m-6.275-.95l1.075-9.35q.05-.375.337-.513t.688-.012l2.5.925q.35.15.462.45t-.012.65l-2.825 7.85zm-7.4 0L4.375 8.9q-.125-.35-.012-.663t.462-.437l2.5-.925q.35-.15.663-.012t.362.537l1.05 9.35zm-4.3.95q-.65.2-1.175-.488T1.55 15.85l2.15-4.375l1.925 5.375zm8-.95L9.7 6q-.05-.425.237-.712T10.65 5h2.7q.425 0 .713.288T14.3 6l-1.2 10.75z"></svg:path>`,
})
export class MaterialSymbolsBakeryDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
