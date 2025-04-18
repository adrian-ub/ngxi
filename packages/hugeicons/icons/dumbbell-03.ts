import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDumbbell03Icon],svg[hugeicons-dumbbell-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6.5h1.528c.31 0 .616-.075.899-.202q3.573-1.596 7.146 0c.284.127.589.202.9.202H18m-12 11h1.528c.31 0 .616-.076.899-.202q3.573-1.596 7.146 0c.284.127.589.202.9.202H18M6 3v7m12-7v7M6 14v7m12-7v7M3.5 6.5H2m18.5 0H22m-18.5 11H2m18.5 0H22M3.5 4.5v4m17-4v4m-17 7v4m17-4v4" color="currentColor"></svg:path>`,
})
export class HugeiconsDumbbell03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
