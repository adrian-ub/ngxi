import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationFemaleSymbolIcon],svg[foundation-female-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68.507 55.658c10.221-10.221 10.221-26.793 0-37.016c-10.222-10.221-26.793-10.221-37.015 0c-10.222 10.223-10.222 26.795 0 37.016A26.05 26.05 0 0 0 44.9 62.823v8.09h-5.299a1.543 1.543 0 0 0-1.544 1.545v6.886c0 .852.692 1.543 1.544 1.544H44.9v6.592c0 .753.54 1.379 1.254 1.515v.029h7.177c.852 0 1.544-.691 1.544-1.544h.001v-6.592h5.523c.853 0 1.544-.691 1.544-1.544v-6.886a1.54 1.54 0 0 0-1.544-1.545h-5.522v-8.048a26.05 26.05 0 0 0 13.63-7.207M50 53.349c-8.946 0-16.199-7.252-16.198-16.198c0-8.946 7.252-16.199 16.199-16.199c8.946 0 16.199 7.252 16.198 16.198S58.946 53.349 50 53.349"></svg:path>`,
})
export class FoundationFemaleSymbolIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
