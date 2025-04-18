import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsCoffeeIcon],svg[grommet-icons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M6.264 20.192c4.096 2.868 8.602-.081 11.47-4.177s4.097-9.338.002-12.206s-8.602.08-11.47 4.176s-4.098 9.339-.002 12.207Z"></svg:path><svg:path fill="currentColor" d="M16.589 5.447c-1.393.246-5.326 2.375-5.408 5.98c-.083 3.604-2.787 6.594-3.77 7.126c1.803.042 5.326-2.375 5.408-5.98c.083-3.604 2.786-6.594 3.77-7.126"></svg:path></svg:g>`,
})
export class GrommetIconsCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
