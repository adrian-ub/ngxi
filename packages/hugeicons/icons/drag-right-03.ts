import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragRight03Icon],svg[hugeicons-drag-right-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.296 9.722h.939c1.038 0 1.879.846 1.879 1.89m0 0v.944m0-.945c0-.522.42-.944.94-.944c1.037 0 1.878.845 1.878 1.889m0 0v.944m0-.944c0-.495.441-.871.927-.79l.321.054c.906.152 1.57.94 1.57 1.863v.447c0 2.052 0 3.079-.311 3.896c-.18.474-.657 1.078-1.037 1.515a2.08 2.08 0 0 0-.531 1.36V22m-6.575-10.389V6.417c0-.783-.631-1.417-1.41-1.417s-1.409.634-1.409 1.417v7.52l-1.522-1.535a1.576 1.576 0 0 0-2.358.131a1.61 1.61 0 0 0-.03 1.958l3.381 4.342c.647.831.999 2.112.999 3.167"></svg:path><svg:path d="M11.688 9.5a4 4 0 1 0-3.876 0m8.906-5.504l1.744 1.44c.255.272.297.477.172.779a.8.8 0 0 1-.212.28l-1.704 1.51m-2.92-2.024h3.737"></svg:path></svg:g>`,
})
export class HugeiconsDragRight03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
