import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsKidneysNegativeIcon],svg[healthicons-kidneys-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsKidneysNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm35.312 30.753c10.865-4.582 6.577-20.049-.965-22.604c-3.128-1.06-6.58 2.457-6.558 4.64c.01.945.496 1.865 1.004 2.824c.666 1.26 1.368 2.585 1.07 4.118c-.525 2.7-1.113 7.256.402 9.419c1.515 2.162 3.038 2.45 5.047 1.603M29 23c.075.997.076.997.077.997h.008l.007-.001l.008-.001l-.012.002a1.2 1.2 0 0 0-.471.22c-.228.178-.617.617-.617 1.766v14.016L27 40h-1V25.983c0-1.683.611-2.736 1.383-3.34a3.16 3.16 0 0 1 1.357-.616l.116-.017l.026-.003l.014-.002l.016-.001h.01l.001-.001s.002 0 .077.997m-16.452 7.753c-10.864-4.582-6.577-20.049.965-22.604c3.129-1.06 6.58 2.457 6.559 4.64c-.01.945-.497 1.865-1.005 2.824c-.666 1.26-1.368 2.585-1.07 4.118c.525 2.7 1.113 7.256-.402 9.419c-1.515 2.162-3.038 2.45-5.047 1.603M19 23c-.075.997-.076.997-.077.997h-.008l-.007-.001l-.008-.001l.012.002q.029.003.103.026c.098.03.233.088.368.194c.228.178.617.617.617 1.766v14.016L21 40h1V25.983c0-1.683-.611-2.736-1.383-3.34a3.16 3.16 0 0 0-1.357-.616l-.116-.017l-.04-.005l-.016-.001h-.01l-.001-.001s-.002 0-.077.997" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsKidneysNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsKidneysNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
