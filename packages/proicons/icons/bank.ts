import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBankIcon],svg[proicons-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="18.5" height="3" x="2.75" y="18.376" rx="1"></svg:rect><svg:path d="M11.04 3.15L3.27 7.4a1 1 0 0 0-.52.877v.997a.6.6 0 0 0 .6.6h17.3a.6.6 0 0 0 .6-.6v-.997a1 1 0 0 0-.52-.877l-7.77-4.25a2 2 0 0 0-1.92 0M5.25 9.874v8.51m13.5-8.51v8.51m-4.25-8.51v8.51m-5-8.51v8.51"></svg:path></svg:g>`,
})
export class ProiconsBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
