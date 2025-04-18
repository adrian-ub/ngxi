import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMosque03Icon],svg[hugeicons-mosque-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12v10m16-10v10M6 8v4m12-4v4M3 12h18M5 8h14M3 22h18M12 3V2m3 20v-.894c0-1.43 0-2.144-.224-2.785a4 4 0 0 0-.583-1.09c-.41-.542-1.004-.938-2.193-1.731c-1.19.793-1.784 1.19-2.193 1.731a4 4 0 0 0-.583 1.09C9 18.961 9 19.676 9 21.106V22m.025-14C5.94 5.5 10.678 4.25 12 3c1.322 1.25 6.06 2.5 2.975 5z" color="currentColor"></svg:path>`,
})
export class HugeiconsMosque03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
