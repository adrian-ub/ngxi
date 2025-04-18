import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightForestOutlineIcon],svg[material-symbols-light-forest-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21v-4H1.885l3.965-6H3.923L9 3.73l3 4.3l3-4.3L20.077 11H18.15l3.966 6H16v4h-2v-4h-4v4zm7.456-5h4.817l-3.971-6h1.848L15 5.5l-2.371 3.39L14.077 11H12.15zM3.727 16h10.546l-3.971-6h1.848L9 5.5L5.85 10h1.848zm0 0h3.971H5.85h6.3h-1.848h3.971zm11.729 0H12.15h1.927h-1.448h5.521h-1.848h3.971zM14 17h2zm2.121 0"></svg:path>`,
})
export class MaterialSymbolsLightForestOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
