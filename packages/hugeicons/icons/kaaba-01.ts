import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKaaba01Icon],svg[hugeicons-kaaba-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 22V5.99c0-.732 0-1.099.204-1.367c.204-.27.556-.367 1.26-.563l7-1.949c.267-.074.4-.111.536-.111s.27.037.535.111l7 1.949c.705.196 1.057.294 1.261.563S21 5.258 21 5.99V22M2 22h20"></svg:path><svg:path d="m3 9l8.566-1.951c.286-.065.582-.065.868 0L21 9m-1.35 3.7L21 13m-5.4-1.2l.9.2m-3.6-.8L12 11l-.9.2m-6.75 1.5L3 13m5.4-1.2l-.9.2M12 7v15"></svg:path></svg:g>`,
})
export class HugeiconsKaaba01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
